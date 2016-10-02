'use strict';

const setInitialView = () => {
  $('body').children('*').hide();
  $('#main-title').show();
  $('#main-image').show();
  $('br').show();
  $('.welcome-button').show();
};

const setUserView = () => {
  $('body').children('*').hide();
  $('nav').show();
  $('.option-button').show();
};

const setRecipeIngredientsView = () => {
  $('body').children('*').hide();
  $('nav').show();
  $('#recipe-ingredient-list').show();
  $('#recipe-ingredient-list').children('*').show();

  $('#recipe-instruction-list').show();
  $('#recipe-instruction-list').children('*').show();
};

module.exports = {
  setInitialView,
  setUserView,
  setRecipeIngredientsView
};
