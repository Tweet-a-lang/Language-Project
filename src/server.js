const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '../public');
    // const publicPath = express.static(path.join(__dirname, '../public'));

    // app.use('/public', publicPath);
    app.get('/', function (req, res) { 
      console.log('path', indexPath);
      res.sendFile(indexPath); });
    // app.use('/node_modules', express.static(__dirname + '/node_modules'));

    return app;
  }
};