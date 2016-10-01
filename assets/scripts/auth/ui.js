'use strict';

const app = require('../app.js');
const viewStateUi = require('../viewstates/ui.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  viewStateUi.setSpinWheelView();
};

const changePasswordSuccess = () => {
  console.log("Password successfully changed.");
};

const signOutSuccess = () => {
  app.user = null;
  viewStateUi.setInitialView();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
};
