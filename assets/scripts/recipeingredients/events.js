'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const recipeApi = require('../recipes/api');
const ingredientApi = require('../ingredients/api');
const ui = require('./ui');

const onAddRecipeingredient = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addRecipeingredient(data)
    .done(ui.addRecipeingredientSuccess)
    .fail(ui.failure);
};

const onAddNewRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  let recipeData = {
    recipe: data.recipe
  };
  // let ingredientData = data.ingredient;

  recipeApi.addRecipe(recipeData)
    .done(console.log("Added"))
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#add-new-recipe').on('submit', onAddNewRecipe);
};

module.exports = {
  addHandlers
};
