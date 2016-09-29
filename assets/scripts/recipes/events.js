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

const onAddRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addRecipe(data)
    .done(ui.addRecipeSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#index-recipes').on('submit', onIndexRecipes);
  $('#add-recipe').on('submit', onAddRecipe);
};

module.exports = {
  addHandlers
};
