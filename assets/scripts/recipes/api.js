'use strict';

const app = require('../app');

const indexRecipes = () => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const getRecipe = (id) => {
  return $.ajax({
    url: app.host + '/recipes/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const searchRecipes = (data) => {
  return $.ajax({
    url: app.host + '/recipe',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

const myRecipes = () => {
  return $.ajax({
    url: app.host + '/userrecipe',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const addRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

const updateRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes/' + app.recipeId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

const deleteRecipe = (recipeId) => {
  return $.ajax({
    url: app.host + '/recipes/' + recipeId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const getRandomRecipe = () => {
  return $.ajax({
    url: app.host + '/randomrecipe',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

module.exports = {
  indexRecipes,
  getRecipe,
  searchRecipes,
  myRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getRandomRecipe
};
