'use strict';

const recipeCardTemplate = require('../templates/recipe-listing.handlebars');
const ingredientListTemplate = require('../templates/ingredient-listing.handlebars');
const instructionListTemplate = require('../templates/instruction-listing.handlebars');
const viewState = require('../viewstates/ui.js');

const indexRecipesSuccess = (recipes) => {
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const getListingSuccess = (recipe) => {
  console.log(recipe);
  $('#recipe-title').html(recipe.recipe.name);
  $('#recipe-ingredient-list').html(ingredientListTemplate(recipe));
  $('#recipe-instruction-list').html(instructionListTemplate(recipe));
  viewState.setRecipeIngredientsView();
};

const searchRecipesSuccess = (recipes) => {
  console.log(recipes);
  $('#recipe-list').html(recipeCardTemplate(recipes));
  
};

const addRecipeSuccess = () => {
  console.log("Recipe successfully added.");
};

const updateRecipeSuccess = () => {
  console.log("Recipe successfully updated.");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexRecipesSuccess,
  getListingSuccess,
  searchRecipesSuccess,
  addRecipeSuccess,
  updateRecipeSuccess,
  failure
};
