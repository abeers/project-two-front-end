'use strict';

const ui = require('./ui');

const onSignInClick = () => {
  $('.welcome-button').hide();
  $('#sign-in').show();
};

const onSignUpClick = () => {
  $('.welcome-button').hide();
  $('#sign-up').show();
};

const onHomeClick = () => {
  ui.setUserView();
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

const onSearchRecipesClick = () => {
  $('.option-button').hide();
  $('#search-for-recipe').show();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
};

const onAddRecipeClick = () => {
  $('.option-button').hide();
  $('#add-new-recipe').show();
};

const onTabClick = (event) => {
  let listToShow = $(event.target).data('list');
  $('.active').removeClass('active');
  $(event.target).addClass('active');
  $('.recipe-part-list').hide();
  $('#' + listToShow).show();
};

const addHandlers = () => {
  $('#sign-in-button').on('click', onSignInClick);
  $('#sign-up-button').on('click', onSignUpClick);
  $('#home-button').on('click', onHomeClick);
  $('#change-password-button').on('click', onChangePasswordClick);
  $('#find-recipes-button').on('click', onFindRecipesClick);
  $('#search-recipes-button').on('click', onSearchRecipesClick);
  $('#add-recipe-button').on('click', onAddRecipeClick);
  $('.recipe-tab').on('click', onTabClick);
};

module.exports = {
  addHandlers
};
