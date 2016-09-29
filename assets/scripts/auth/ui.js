'use strict';

const app = require('../app.js');

const signUpSuccess = () => {
  console.log('Sign Up Success!');
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
};

const changePasswordSuccess = () => {
  console.log("Password successfully changed.");
};

const signOutSuccess = () => {
  app.user = null;
  console.log("Sign out success.");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
};
