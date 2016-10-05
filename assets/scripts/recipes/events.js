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
    .fail(ui.searchFailure);
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
    .done(function () {
      api.myRecipes()
        .done(ui.myRecipesSuccess)
        .fail(ui.failure);
    })
    .fail(ui.failure);
};

const onGetListing = function (event) {
  event.preventDefault();
  let recipeId = $(this).data('id');
  api.getRecipe(recipeId)
    .done(ui.getListingSuccess)
    .fail(ui.failure);
};

const onDeleteClick = (event) => {
  event.preventDefault();
  // alert('Are you sure you want to delete this recipe?');
  let recipeId = $(event.target).data('id');
  api.deleteRecipe(recipeId)
    .done(function () {
      api.myRecipes()
        .done(ui.myRecipesSuccess)
        .fail(ui.failure);
    })
    .fail(ui.failure);
};

const onSpin = (event) => {
  event.preventDefault();
  api.getRandomRecipe()
    .done(ui.recipeRouletteSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#find-recipes-button').on('click', onIndexRecipes);
  $('#search-for-recipe').on('submit', onSearchRecipes);
  $('#my-recipes-button').on('click', onMyRecipes);
  $('#add-recipe').on('submit', onAddRecipe);
  $('#update-recipe').on('submit', onUpdateRecipe);
  $('#recipe-list').on('click', '.recipe-listing', onGetListing);
  $('#recipe-list').on('click', '.my-recipe-listing .recipe-name', onGetListing);
  $('#recipe-list').on('click', '.my-recipe-listing .delete-button', onDeleteClick);
  $('#spin-button').on('click', onSpin);
};

module.exports = {
  addHandlers,
  onMyRecipes
};
