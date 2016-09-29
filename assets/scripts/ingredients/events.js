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

const addHandlers = () => {
  $('#index-ingredients').on('submit', onIndexIngredients);
};

module.exports = {
  addHandlers
};
