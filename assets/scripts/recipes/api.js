'use strict';

const app = require('../app');

const indexRecipes = () => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'GET',
  });
};

const addRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'POST',
    data: data
  });
};

const updateRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes/1',
    method: 'PATCH',
    data: data
  });
};

module.exports = {
  indexRecipes,
  addRecipe,
  updateRecipe
};
