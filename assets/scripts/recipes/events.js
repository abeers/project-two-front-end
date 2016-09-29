'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onAddRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addRecipe(data)
    .done(ui.addRecipeSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#add-recipe').on('submit', onAddRecipe);
};

module.exports = {
  addHandlers
};
