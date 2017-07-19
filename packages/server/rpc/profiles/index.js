const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'profiles',
  'fetch profiles',
  (_, { session }) =>
    rp({
      uri: `${process.env.API_ADDR}/1/profiles.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development'),
      qs: {
        access_token: session.accessToken,
        subprofiles: true,
        locked: true,
      },
    })
      .then(result => JSON.parse(result)),
);
