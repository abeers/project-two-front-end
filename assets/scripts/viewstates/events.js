'use strict';

const ui = require('./ui');
const recipeApi = require('../recipes/api');
const app = require('../app');

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

const onMyRecipesClick = () => {
  $('.option-button').hide();
  $('#my-recipes').show();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
};

const onAddRecipeClick = () => {
  app.ingredientCount = 1;
  app.instructionCount = 1;
  $('.field-button').show();
  $('.option-button').hide();
  $('#add-new-recipe').show();
  ui.showNumberOfIngredients(app.ingredientCount);
};

const onTabClick = (event) => {
  let listToShow = $(event.target).data('list');
  $('.active').removeClass('active');
  $(event.target).addClass('active');
  $('.recipe-part-list').hide();
  $('#' + listToShow).show();
};

const onEditRecipeClick = (event) => {
  let recipeId = $(event.target).data('id');
  app.recipeId = recipeId;
  recipeApi.getRecipe(recipeId)
    .done(ui.setEditRecipeView)
    .fail(ui.failure);
};

const onAddIngredientField = () => {
  $('#ingredient-forms').html('');
  app.ingredientCount++;
  ui.showNumberOfIngredients(app.ingredientCount);
};

const onRemoveIngredientField = () => {
  $('#ingredient-forms').html('');
  if(app.ingredientCount > 1) {
    app.ingredientCount--;
  }
  ui.showNumberOfIngredients(app.ingredientCount);
};

const addHandlers = () => {
  $('#sign-in-button').on('click', onSignInClick);
  $('#sign-up-button').on('click', onSignUpClick);
  $('#home-button').on('click', onHomeClick);
  $('#change-password-button').on('click', onChangePasswordClick);
  $('#find-recipes-button').on('click', onFindRecipesClick);
  $('#search-recipes-button').on('click', onSearchRecipesClick);
  $('#my-recipes-button').on('click', onMyRecipesClick);
  $('#add-recipe-button').on('click', onAddRecipeClick);
  $('.recipe-tab').on('click', onTabClick);
  $('#recipe-list').on('click', '.my-recipe-listing .edit-button', onEditRecipeClick);
  $('#add-ingredient-field-button').on('click', onAddIngredientField);
  $('#remove-ingredient-field-button').on('click', onRemoveIngredientField);
};

module.exports = {
  addHandlers
};
