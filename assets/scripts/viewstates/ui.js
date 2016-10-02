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
  $('#recipe-list').html('');
};

const setRecipeIngredientsView = () => {
  $('body').children('*').hide();
  $('nav').show();
  $('#recipe-title').show();
  $('.tabs').show();
  $('.tabs').children('*').show();
  $('#recipe-ingredient-list').show();
  $('#recipe-ingredient-list').children('*').show();
};

module.exports = {
  setInitialView,
  setUserView,
  setRecipeIngredientsView
};
