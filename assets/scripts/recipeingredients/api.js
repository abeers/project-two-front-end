'use strict';

const app = require('../app');

const addRecipeingredient = (data) => {
  return $.ajax({
    url: app.host + '/recipeingredients',
    method: 'POST',
    data: data
  });
};

module.exports = {
  addRecipeingredient
};
