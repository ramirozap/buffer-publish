const { rpc } = require('@bufferapp/micro-rpc');
const checkToken = require('./checkToken');
const loginMethod = require('./login');
const logoutMethod = require('./logout');
const profilesMethod = require('./profiles');

module.exports = checkToken(rpc(
  loginMethod,
  logoutMethod,
  profilesMethod,
));
