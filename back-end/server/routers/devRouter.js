const router = require('express').Router();
const {getAllTweets, resetUser, deleteUser, getNumOfTweets} = require('../controllers');


router.get('/tweets', getAllTweets);
router.get('/numoftweets', getNumOfTweets);
router.get('/reset/:username', resetUser);
router.delete('/delete/:username', deleteUser);


module.exports = router; 
