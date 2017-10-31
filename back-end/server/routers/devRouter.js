const router = require('express').Router();
const {getAllTweets, resetUser, deleteUser, getNumOfTweets, deleteTweet} = require('../controllers');


router.get('/tweets', getAllTweets);
router.get('/numoftweets', getNumOfTweets);
router.get('/reset/:username', resetUser);
router.delete('/user/:username', deleteUser);
router.delete('/tweets/:id', deleteTweet);

module.exports = router; 
