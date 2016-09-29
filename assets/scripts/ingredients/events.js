'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onIndexIngredients = function (event) {
  event.preventDefault();

  api.indexIngredients()
    .done(ui.indexIngredientsSuccess)
    .fail(ui.failure);
};

const onAddIngredient = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addIngredient(data)
    .done(ui.addIngredientSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#index-ingredients').on('submit', onIndexIngredients);
  $('#add-ingredient').on('submit', onAddIngredient);
};

module.exports = {
  addHandlers
};
