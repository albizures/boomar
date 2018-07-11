const app = require('express')();
const router = require('folder-router');

require('./config/express')(app)

router(app, {
  location: __dirname + '/routes',
  useFilenameAsRoot: true
});

app.listen(4321);