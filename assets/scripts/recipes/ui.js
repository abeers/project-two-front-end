'use strict';

const recipeCardTemplate = require('../templates/recipe-listing.handlebars');
const ingredientListTemplate = require('../templates/ingredient-listing.handlebars');
const viewState = require('../viewstates/ui.js');

const indexRecipesSuccess = (recipes) => {
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const getListingSuccess = (recipe) => {
  console.log(recipe);
  $('#recipe-ingredient-list').html(ingredientListTemplate(recipe));
  viewState.setRecipeIngredientsView();
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
  addRecipeSuccess,
  updateRecipeSuccess,
  failure
};
