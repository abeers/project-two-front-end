'use strict';

const onSignInClick = () => {
  $('.welcome-button').hide();
  $('#sign-in').show();
};

const onSignUpClick = () => {
  $('.welcome-button').hide();
  $('#sign-up').show();
};

const onChangePasswordClick = () => {
  $('#change-password-button').hide();
  $('#change-password').show();
};

const onAddRecipeClick = () => {
  $('.option-button').hide();
  $('#add-new-recipe').show();
};

const addHandlers = () => {
  $('#sign-in-button').on('click', onSignInClick);
  $('#sign-up-button').on('click', onSignUpClick);
  $('#change-password-button').on('click', onChangePasswordClick);
  $('#add-recipe-button').on('click', onAddRecipeClick);
};

module.exports = {
  addHandlers
};
