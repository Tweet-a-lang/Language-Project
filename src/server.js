const path = require('path');
const express = require('express');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '../public/index.html');
    const publicPath = express.static(path.join(__dirname, '../public'));

    app.use('/public', publicPath);
    app.get('/bundle.js', function (_, res) { res.sendFile(indexPath); });
    app.use('/node_modules', express.static(__dirname + '/node_modules'));

    return app;
  }
};