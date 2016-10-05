'use strict';

const recipeCardTemplate = require('../templates/recipe-listing.handlebars');

const indexIngredientsSuccess = (data) => {
  // console.log(data);
};

const addIngredientSuccess = () => {
  // console.log("Ingredient successfully added");
};

const searchByIngredientSuccess = (recipes) => {
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const searchFailure = () => {
  $('#recipe-list').html('No recipes found');
};

const failure = (error) => {
  // console.error(error);
};

module.exports = {
  indexIngredientsSuccess,
  addIngredientSuccess,
  searchByIngredientSuccess,
  failure,
  searchFailure
};
