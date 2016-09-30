'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let form = event.target;

  let signUpData = getFormFields(form);

  api.signUp(signUpData)
  .done(function (data, textStatus, jqXHR) {
    api.signIn(data, textStatus, jqXHR, signUpData)
      .done(ui.signInSuccess)
      .fail(ui.logInFailure);
  })
  .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers
};
