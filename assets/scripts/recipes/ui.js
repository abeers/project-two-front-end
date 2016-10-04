'use strict';

const recipeCardTemplate = require('../templates/recipe-listing.handlebars');
const myRecipeCardTemplate = require('../templates/my-recipe-listing.handlebars');
const ingredientListTemplate = require('../templates/ingredient-listing.handlebars');
const instructionListTemplate = require('../templates/instruction-listing.handlebars');
const viewState = require('../viewstates/ui.js');

const sortInstructions = (recipe) => {
  Array.prototype.sortOn = function(key){
      this.sort(function(a, b){
          if(a[key] < b[key]){
              return -1;
          }else if(a[key] > b[key]){
              return 1;
          }
          return 0;
      });
  };

  recipe.instructions.sortOn('stepnum');
};

const indexRecipesSuccess = (recipes) => {
  $('.option-button').hide();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const getListingSuccess = (recipe) => {
  console.log(recipe);
  $('#recipe-title').html(recipe.recipe.name);
  sortInstructions(recipe.recipe);
  $('#recipe-ingredient-list').html(ingredientListTemplate(recipe));
  $('#recipe-instruction-list').html(instructionListTemplate(recipe));
  viewState.setRecipeIngredientsView();
};

const searchRecipesSuccess = (recipes) => {
  $('#recipe-list').html(recipeCardTemplate(recipes));
};

const myRecipesSuccess = (recipes) => {
  $('.option-button').hide();
  $('#recipe-list').show();
  $('#recipe-list').children('*').show();
  $('#recipe-list').html(myRecipeCardTemplate(recipes));
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
  updateRecipeSuccess,
  deleteRecipeSuccess,
  recipeRouletteSuccess,
  failure
};
