'use strict';

const app = require('../app');

const addRecipeingredient = (data) => {
  return $.ajax({
    url: app.host + '/recipeingredients',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

const addInstruction = (data) => {
  return $.ajax({
    url: app.host + '/instructions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

module.exports = {
  addRecipeingredient,
  addInstruction
};
