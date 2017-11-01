const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const config = require('./config');
const mongoose = require('mongoose');


const apiRouter = require('./routers/apiRouter');
const devRouter = require('./routers/devRouter');

const {json} = require('body-parser');
const cors = require('cors');
mongoose.Promise = global.Promise;

mongoose.connect(config.url, {
  useMongoClient:true
})
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    if(err) console.log('could not connect to the database');
  });

app.use(cors());
app.options('*', cors());
app.get('/', (req, res) => {
  res.send('the root is working');
});


app.use(json());

app.use('/api', apiRouter);
app.use('/dev', devRouter);

app.use('/*', (req, res, next) => {
  next({type: 404});
});

app.use((err, req, res, next) => {
  const {msg: message, type} = err;
  if(type === 400) return res.status(400).send({message: message || 'invalid input'});
  else if(type === 405) return res.status(405).send({message: message || 'not allowed, name already taken'});
  else if(type === 404) return res.status(404).send({message: message || 'sorry data not found'});
  else if(type === 204) return res.status(204).send({message: message || 'Server processed request but user is already deleted'});
  next(err);
});

app.use((err, req, res) => {
  const {msg: message} = err;
  return res.status(500).send({message: message || 'Sorry there is an internal server error'});
});



app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});

module.exports = app;