const {expect} = require('chai');
const request = require('supertest');
const app = require('../server/server');
const {describe, it} = require('mocha');
describe('API', () => {
  describe('GET tweets/:username', () => {
    it('returns an array', () => {
      const numbOfTweets = 5;
      return request(app)
        .get(`/api/tweets/Northcoders?count=${numbOfTweets}`)
        .then(res => {
          expect(200);
          const tweetData = JSON.parse(res.text);
          expect(tweetData).to.be.an('array');
          expect(tweetData.length).to.equal(numbOfTweets);
          expect(tweetData[0].answers).to.be.an('object');
          expect(tweetData[1].answers).to.be.an('object');
          expect(tweetData[2].answers).to.be.an('object');
          expect(tweetData[3].answers).to.be.an('object');
          expect(tweetData[4].answers).to.be.an('object');
          expect(tweetData[0].answers.hints).to.not.equal(undefined);
          expect(tweetData[1].answers.hints).to.not.equal(undefined);
          expect(tweetData[2].answers.hints).to.not.equal(undefined);
          expect(tweetData[3].answers.hints).to.not.equal(undefined);
          expect(tweetData[4].answers.hints).to.not.equal(undefined);
          expect(tweetData[0].answers.choices).to.be.an('array');
        });
    }).timeout(8000);
  });
  describe('GET tweets/:username/:topic', () => {
    it('returns with a status code of 200', () => {
      return request(app)
        .get('/api/tweets/Northcoders/news')
        .then(res => {
          expect(200);
          const tweets = res.body;
          expect(tweets).to.be.an('array');
          expect(tweets[0].tweet.topic).to.equal('news');
          expect(tweets[1].tweet.topic).to.equal('news');
          expect(tweets[2].tweet.topic).to.equal('news');
          expect(tweets[3].tweet.topic).to.equal('news');
          expect(tweets[4].tweet.topic).to.equal('news');
          expect(tweets[0].answers).to.be.an('object');
          expect(tweets[1].answers).to.be.an('object');
          expect(tweets[2].answers).to.be.an('object');
          expect(tweets[3].answers).to.be.an('object');
          expect(tweets[4].answers).to.be.an('object');
          expect(tweets[0].answers.hints).to.not.equal(undefined);
          expect(tweets[1].answers.hints).to.not.equal(undefined);
          expect(tweets[2].answers.hints).to.not.equal(undefined);
          expect(tweets[3].answers.hints).to.not.equal(undefined);
          expect(tweets[4].answers.hints).to.not.equal(undefined);
          expect(tweets[0].answers.choices).to.be.an('array');
        });
    }).timeout(8000);
  });
  describe('GET user/:username', () => {
    it('returns with a status code of 200', () => {
      return request(app)
        .get('/api/user/Northcoders')
        .then(res => {
          const {name, score, completedTweets} = res.body;
          expect(name).to.be.a('string');
          expect(name).to.eql('Northcoders');
          expect(score).to.be.a('number');
          expect(completedTweets).to.be.a('array');
        });
    });
    it('returns a 400 error if the user is not found', () => {
      return request(app)
        .get('/api/user/booboo')
        .then((res) => {
          expect(400);
        });
    }).timeout(8000);
  });
  describe('POST user/', () => {
    it('returns with a status code of 200', () => {
      return request(app)
        .post('/api/user')
        .send({
          name: 'boo boo'
        })
        .then(res => {
          expect(200);
          const {name} = res.body;
          expect(name).to.equal('boo boo');
          return request(app)
            .delete('/dev/user/boo boo');
        });
    }).timeout(8000);
    it('returns with a 400 error if posting with no name', () => {
      return request(app)
        .post('/api/user')
        .send()
        .then((res) => {
          expect(400);
        });
    }).timeout(8000);
    it('returns with a 400 error if posting a duplicate name', () => {
      return request(app)
        .post('/api/user')
        .send({
          name: 'olie'
        })
        .then(() => {
          expect(400);
          return request(app).delete('/dev/olie');
        });
    }).timeout(8000);
  });
  describe('PATCH user/:username', () => {
    it('returns with a status code of 200', () => {
      const patchBody = {
        completedTweets: ['test'],
        score: 1
      };
      return request(app)
        .patch('/api/user/Northcoders')
        .send(patchBody)
        .then((res) => {
          expect(200);
        });
    }).timeout(8000);
    it('returns an object containing the updated user', () => {
      const patchBody = {
        completedTweets: ['test'],
        score: 1
      };
      return request(app)
        .get('/dev/reset/Northcoders')
        .then(() => {
          return request(app)
            .patch('/api/user/Northcoders')
            .send(patchBody)
            .expect(200);
        })
        .then(res => {
          const {score, completedTweets} = res.body;
          expect(score).to.equal(1);
          expect(completedTweets).to.eql(['test']);
        });
    }).timeout(8000);
    it('returns a 400 error if patching a user that does not exist', () => {
      return request(app)
        .patch('/api/user/testUser')
        .send({})
        .then((res) => {
          expect(400);
        });
    }).timeout(8000);
  });
});

describe('DEV', () => {
  describe('GET reset/:username', () => {
    it('returns with a status code of 200', () => {
      return request(app)
        .get('/dev/reset/olie')
        .expect(200)
        .then(res => {
          const {name, score, completedTweets} = res.body;
          expect(name).to.equal('olie');
          expect(score).to.equal(0);
          expect(completedTweets).to.eql([]);
        });
    }).timeout(8000);
  });
  describe('DELETE delete/:username', () => {
    it('returns with a status code of 200 for successful deletion', () => {
      return request(app)
        .post('/api/user')
        .send({
          name: 'boo boo'
        })
        .then(() => {
          return request(app)
            .delete('/dev/user/boo boo')
            .then((res) => {
              expect(200);
            });
        });
    }).timeout(8000);
    it('returns with a status code of 204 when trying to delete a user that does not exist', () => {
      return request(app)
        .delete('/dev/user/doesnotexist')
        .then((res) => {
          expect(204);
        });
    }).timeout(8000);
  });
});