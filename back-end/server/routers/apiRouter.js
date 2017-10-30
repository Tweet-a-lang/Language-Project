const router = require('express').Router();
const  {getUser, addUser, getAllUsers, getUnseenTweets, getScoreboard, patchUser, getUnseenTweetsByTopic} = require('../controllers');

router.get('/user/:username', getUser);
router.post('/user', addUser);
router.get('/user', getAllUsers);
router.get('/tweets/:username/', getUnseenTweets);
router.get('/tweets/:username/:topic', getUnseenTweetsByTopic);
router.get('/scoreboard', getScoreboard);
router.patch('/user/:username', patchUser);

module.exports = router;