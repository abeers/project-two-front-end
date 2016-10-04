'use strict';

const ingredientFormTemplate = require('../templates/ingredient-form.handlebars');
const instructionFormTemplate = require('../templates/instruction-form.handlebars');

const setInitialView = () => {
  $('body').children('*').hide();
  $('#main-title').show();
  $('#main-image').show();
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

const setEditRecipeView = (recipeData) => {
  $('body').children('*').hide();
  $('nav').show();
  $('#update-recipe').show();
  $('#update-recipe').children('*').show();
};

const showNumberOfIngredients = (count) => {
  // $('#ingredient-forms').html('');
  for (let i = 0; i < count; i++) {
    $('#ingredient-forms').append(ingredientFormTemplate());
  }
};

const showNumberOfInstructions = (count) => {
  // $('#instruction-forms').html('');
  for (let i = 0; i < count; i++) {
    $('#instruction-forms').append(instructionFormTemplate());
  }
};

const removeIngredient = () => {
  let ingredients = $('.ingredient-form');
  if (ingredients.length > 1) {
    ingredients.last().remove();
  }
};

const removeInstruction = () => {
  let instructions = $('.instruction-form');
  if (instructions.length > 1) {
    instructions.last().remove();
  }
};

module.exports = {
  setInitialView,
  setUserView,
  setRecipeIngredientsView,
  setEditRecipeView,
  showNumberOfIngredients,
  showNumberOfInstructions,
  removeIngredient,
  removeInstruction
};
