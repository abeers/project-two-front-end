'use strict';

const ingredientFormTemplate = require('../templates/ingredient-form.handlebars');
const instructionFormTemplate = require('../templates/instruction-form.handlebars');

const clearPage = () => {
  $('body').children('*').hide();
  $('nav').show();
};

const setInitialView = () => {
  $('body').children('*').hide();
  $('#main-title').show();
  $('#main-image').show();
  $('.welcome-button').show();
};

const setUserView = () => {
  clearPage();
  $('.option-button').show();
  $('#recipe-list').html('');
};

const setRecipeIngredientsView = () => {
  clearPage();
  $('#recipe-title').show();
  $('.tabs').show();
  $('.tabs').children('*').show();
  $('#recipe-ingredient-list').show();
  $('#recipe-ingredient-list').children('*').show();
};

const setEditRecipeView = () => {
  clearPage();
  $('#update-recipe').show();
  $('#update-recipe').children('*').show();
};

const setRouletteView = () => {
  clearPage();
  $('#roulette').show();
  $('#roulette').children('*').show();
  $('#recipe-list').html('');
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
};

const showNumberOfIngredients = (count) => {
  for (let i = 0; i < count; i++) {
    $('#ingredient-forms').append(ingredientFormTemplate());
  }
};

const showNumberOfInstructions = (count) => {
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
  setRouletteView,
  showNumberOfIngredients,
  showNumberOfInstructions,
  removeIngredient,
  removeInstruction
};
