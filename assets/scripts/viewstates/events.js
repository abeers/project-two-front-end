'use strict';

const ui = require('./ui');
const recipeApi = require('../recipes/api');
const recipeEvents = require('../recipes/events');
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
  $('.option-button').hide();
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

// const onMyRecipesClick = () => {
//   $('.option-button').hide();
//   // $('#my-recipes').show();
//   $('#recipe-list').show();
//   $('#recipe-list').children('*').show();
//   recipeEvents.onMyRecipes();
// };

const onAddRecipeClick = () => {
  app.formMode = 'ingredient';
  app.ingredientCount = 1;
  app.instructionCount = 1;
  $('.field-button').show();
  $('.option-button').hide();
  $('#add-new-recipe').show();
  $('.recipe-part-forms').hide();
  $('#ingredient-forms').show();
  ui.showNumberOfIngredients(app.ingredientCount);
  ui.showNumberOfInstructions(app.instructionCount);
};

const onFormTabClick = (event) => {
  let formToShow = $(event.target).data('form');
  app.formMode = $(event.target).data('mode');
  $('.active').removeClass('active');
  $(event.target).addClass('active');
  $('.recipe-part-forms').hide();
  $('#' + formToShow).show();
};

const onRecipeTabClick = (event) => {
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

const onAddField = () => {
  if (app.formMode === 'ingredient') {
    ui.showNumberOfIngredients(1);
  } else if (app.formMode === 'instruction') {
    ui.showNumberOfInstructions(1);
  }
};

const onRemoveField = () => {
  if(app.formMode === 'ingredient') {
    ui.removeIngredient();
  } else if (app.formMode === 'instruction') {
    ui.removeInstruction();
  }
};

const addHandlers = () => {
  $('#sign-in-button').on('click', onSignInClick);
  $('#sign-up-button').on('click', onSignUpClick);
  $('#home-button').on('click', onHomeClick);
  $('#change-password-button').on('click', onChangePasswordClick);
  // $('#find-recipes-button').on('click', onFindRecipesClick);
  $('#search-recipes-button').on('click', onSearchRecipesClick);
  // $('#my-recipes-button').on('click', onMyRecipesClick);
  $('#add-recipe-button').on('click', onAddRecipeClick);
  $('.form-tab').on('click', onFormTabClick);
  $('.recipe-tab').on('click', onRecipeTabClick);
  $('#recipe-list').on('click', '.my-recipe-listing .edit-button', onEditRecipeClick);
  $('#add-field-button').on('click', onAddField);
  $('#remove-field-button').on('click', onRemoveField);
};

module.exports = {
  addHandlers
};
