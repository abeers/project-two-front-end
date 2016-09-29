'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data
  });
};

module.exports = {
  signUp,
  signIn
};
