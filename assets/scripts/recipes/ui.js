'use strict';

const recipeCardTemplate = require('../templates/recipe-listing.handlebars');
const myRecipeCardTemplate = require('../templates/my-recipe-listing.handlebars');
const ingredientListTemplate = require('../templates/ingredient-listing.handlebars');
const instructionListTemplate = require('../templates/instruction-listing.handlebars');
const viewState = require('../viewstates/ui.js');

const indexRecipesSuccess = (recipes) => {
  $('.option-button').hide();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const getListingSuccess = (recipe) => {
  $('#recipe-title').html(recipe.recipe.name);
  $('#recipe-ingredient-list').html(ingredientListTemplate(recipe));
  $('#recipe-instruction-list').html(instructionListTemplate(recipe));
  viewState.setRecipeIngredientsView();
};

const searchRecipesSuccess = (recipes) => {
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const myRecipesSuccess = (recipes) => {
  $('.option-button').hide();
  // $('#my-recipes').show();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
  $('#recipe-list').html(myRecipeCardTemplate(recipes));
};

const addRecipeSuccess = () => {
  console.log("Recipe successfully added.");
};

const updateRecipeSuccess = () => {
  console.log("Recipe successfully updated.");
};

const deleteRecipeSuccess = () => {
  console.log("Recipe successfully deleted.");
};

const recipeRouletteSuccess = (recipes) => {
  console.log(recipes);
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexRecipesSuccess,
  getListingSuccess,
  searchRecipesSuccess,
  myRecipesSuccess,
  addRecipeSuccess,
  updateRecipeSuccess,
  deleteRecipeSuccess,
  recipeRouletteSuccess,
  failure
};
