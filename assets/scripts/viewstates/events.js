'use strict';

const onSignInClick = () => {
  $('.welcome-button').hide();
  $('#sign-in').show();
};

const onSignUpClick = () => {
  $('.welcome-button').hide();
  $('#sign-up').show();
};

const addHandlers = () => {
  $('#sign-in-button').on('click', onSignInClick);
  $('#sign-up-button').on('click', onSignUpClick);
};

module.exports = {
  addHandlers
};
