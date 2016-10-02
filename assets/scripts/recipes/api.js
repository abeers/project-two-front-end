'use strict';

const app = require('../app');

const indexRecipes = () => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // }
  });
};

const getRecipe = (id) => {
  return $.ajax({
    url: app.host + '/recipes/' + id,
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // }
  });
};

const addRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // },
    data: data
  });
};

const updateRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes/1',
    method: 'PATCH',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // },
    data: data
  });
};

module.exports = {
  indexRecipes,
  getRecipe,
  addRecipe,
  updateRecipe
};
