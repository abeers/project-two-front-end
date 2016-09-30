'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onAddRecipeingredient = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addRecipeingredient(data)
    .done(ui.addRecipeingredientSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#add-recipeingredient').on('submit', onAddRecipeingredient);
};

module.exports = {
  addHandlers
};
