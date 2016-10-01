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

const onFindRecipesClick = () => {
  $('.option-button').hide();
  $('#index-recipes').show();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
};

const onAddRecipeClick = () => {
  $('.option-button').hide();
  $('#add-new-recipe').show();
};

const addHandlers = () => {
  $('#sign-in-button').on('click', onSignInClick);
  $('#sign-up-button').on('click', onSignUpClick);
  $('#change-password-button').on('click', onChangePasswordClick);
  $('#find-recipes-button').on('click', onFindRecipesClick);
  $('#add-recipe-button').on('click', onAddRecipeClick);
};

module.exports = {
  addHandlers
};
