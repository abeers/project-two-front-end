'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onIndexRecipes = function (event) {
  event.preventDefault();

  api.indexRecipes()
    .done(ui.indexRecipesSuccess)
    .fail(ui.failure);
};

const onSearchRecipes = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.searchRecipes(data)
    .done(ui.searchRecipesSuccess)
    .fail(ui.failure);
};

const onMyRecipes = function (event) {
  event.preventDefault();

  api.myRecipes()
    .done(ui.myRecipesSuccess)
    .fail(ui.failure);
};

const onAddRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addRecipe(data)
    .done(ui.addRecipeSuccess)
    .fail(ui.failure);
};

const onUpdateRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.updateRecipe(data)
    .done(ui.updateRecipeSuccess)
    .fail(ui.failure);
};

const onGetListing = function (event) {
  event.preventDefault();
  let recipeId = $(this).data('id');
  api.getRecipe(recipeId)
    .done(ui.getListingSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#index-recipes').on('submit', onIndexRecipes);
  $('#search-for-recipe').on('submit', onSearchRecipes);
  $('#my-recipes').on('submit', onMyRecipes);
  $('#add-recipe').on('submit', onAddRecipe);
  $('#update-recipe').on('submit', onUpdateRecipe);
  $('#recipe-list').on('click', '.recipe-listing', onGetListing);
};

module.exports = {
  addHandlers
};
