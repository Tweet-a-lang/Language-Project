// const saveTestData = require('../../seed/test.seed')
const { Users, Tweets } = require('../../models/models');
const { pickCorrectWord, filterUnseenTweets } = require('./utils');
require('dotenv').config();
const _ = require('underscore');
const Twit = require('twit');
const {CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET} = process.env;
const T = new Twit({
  consumer_key:         CONSUMER_KEY,
  consumer_secret:      CONSUMER_SECRET,
  access_token:         ACCESS_TOKEN,
  access_token_secret:  ACCESS_TOKEN_SECRET,
  timeout_ms:           5*1000,  // optional HTTP request timeout to apply to all requests. 
});


const getUser = (req, res, next) => {
  let { username } = req.params;
  Users.findOne({ name: username })
    .then(data => {
      if (!data) return next({ type: 404 });
      const {name, _id, vocab, avatar, score, completedTweets} = data.toObject();
      let uniqueVocab = _.uniq(vocab, false, word => word.Spanish);
      const info = {
        name, _id, avatar, score, completedTweets, vocab: uniqueVocab
      };
      return res.send(info);
    })
    .catch(err => {
      if (err) next({ type: 500 });
    });
};

const addUser = (req, res, next) => {
  const avatarUrlDefault = 'https://avatars0.githubusercontent.com/u/30082843?s=460&v=4';
  let {
    name, score = 0, completedTweets = [], avatar = avatarUrlDefault
  } = req.body;

  if (!name) return next({ type: 400, msg: 'missing name' });
  return Users.findOne({ name: name })
    .then(user => {
      if (user) return next({ type: 405, msg: 'the user already exists' });
      else {
        return T.get('users/show', {screen_name: name})
          .then(res => {
            let data = res.data;
            if(data.errors) return avatar;
            else return data.profile_image_url.replace('_normal', '');
          })
          .then((avatar) => {
            const newUser = new Users({ name, score, completedTweets, avatar });
            newUser.save()
              .then(user => {
                res.send(user);
              })
              .catch(err => {
                if (err) next({ type: 500 });
              });
          });
      }
    });

};

const completedTweet = (req, res, next) => {
  const { username, id } = req.params;
  Users.findOneAndUpdate({ name: username }, { $push: { completedTweets: id } }, { new: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      if (err) next({ type: 500 });
    });
};

const getAllUsers = (req, res, next) => {
  Users.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
      if (err) next({ type: 500 });
    });
};

const getAllTweets = (req, res, next) => {
  Tweets.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
      if (err) next({ type: 500 });
    });
};

const getNumOfTweets = (req, res, next) => {
  Tweets.find()
    .then(data => {
      res.send({ message: `Total tweets in DB are: ${data.length}` });
    }).catch(err => {
      if (err) next({ type: 500 });
    });
};

const getUnseenTweets = (req, res, next) => {

  const numOfTweets = +req.query.count || 5;
  let unseenTweets = [];
  const { username } = req.params;
  const {topic} = req.query;
  return Promise.all([
    Users.findOne({ name: username }),
    Tweets.find()
  ])
    .then((data) => {
      const user = data[0];
      const tweets = topic? data[1].filter(t => t.tweet.topic === topic): data[1];

      const completedTweets = user.completedTweets;

      //Filters Tweets that have not been seen by the user
      const filteredTweets = filterUnseenTweets(completedTweets, tweets, numOfTweets);
      //Add copy of filtered tweets for future then blocks
      unseenTweets = filteredTweets.concat([]);

      const analysedTweets = filteredTweets.map(tweet => {
        return pickCorrectWord(tweet, 'ADJ');
      });
      return Promise.all(analysedTweets);
    })
    .then(wordArr => {
      const finalResult = unseenTweets.map((tweet, index) => {
        tweet = tweet.toObject();
        tweet.answers = wordArr[index];
        //remove wordArr from client result
        delete tweet.wordArr;
        return tweet;
      });
      res.send(finalResult);
    })
    .catch(err => next({type: 500, msg: 'internal server error, are there users in the database?'}));
};

const getScoreboard = (req, res) => {
  Users.find()
    .then(users => {
      const scoresArray = users.map(user => {
        user = user.toObject();
        const { name, score, avatar } = user;
        return { name, score , avatar};
      });
      const scoreboard = scoresArray.sort((b,a) => a.score - b.score).slice(0,10);
      res.send(scoreboard);
    });
};

const patchUser = (req, res, next) => {  
  const { username } = req.params;
  const { completedTweets: tweetsDone = [], score: newScore = 0 , vocab = []} = req.body;

  Users.findOne({ name: username })
    .then(user => {
      if (user === null) return next({ type: 400 });

      const newTweetsDone = [...user.completedTweets, ...tweetsDone];
      const oldScore = user.score;
      const newVocab = [...user.vocab, ...vocab];
      user.completedTweets = newTweetsDone;
      user.score = oldScore + newScore;
      user.vocab = newVocab;
      user.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          if (err) next({ type: 500 });
        });
    });
};

const resetUser = (req, res, next) => {
  const { username } = req.params;
  Users.findOne({ name: username })
    .then(user => {
      user.score = 0;
      user.completedTweets = [];
      user.save();
      res.send(user);
    }).catch(err => {
      if (err) next({ type: 500 });
    });
};


const deleteUser = (req, res, next) => {
  const { username } = req.params;
  Users.findOneAndRemove({ name: username })
    .then(user => {
      if (user === null) return next({ type: 204 });
      res.status(200).send(user);
    }).catch(err => {
      if (err) next({ type: 500 });
    });
};

const deleteTweet = (req, res, next) => {
  const {id} = req.params;
  Tweets.findOneAndRemove({_id: id})
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      return next(err);
    });
};
const getUnseenTweetsByTopic = (req, res, next) => getUnseenTweets(req, res,next);
module.exports = {
  getUser,
  addUser,
  completedTweet,
  getAllUsers,
  getAllTweets,
  getUnseenTweets,
  getScoreboard,
  patchUser,
  resetUser,
  deleteUser,
  getNumOfTweets,
  getUnseenTweetsByTopic,
  deleteTweet
};