'use strict';

const recipeCardTemplate = require('../templates/recipe-listing.handlebars');

const indexRecipesSuccess = (recipes) => {
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
  addRecipeSuccess,
  updateRecipeSuccess,
  failure
};
