'use strict';

const app = require('../app');

const indexIngredients = () => {
  return $.ajax({
    url: app.host + '/ingredients',
    method: 'GET',
  });
};

const addIngredient = (data) => {
  return $.ajax({
    url: app.host + '/ingredients',
    method: 'POST',
    data: data
  });
};

module.exports = {
  indexIngredients,
  addIngredient
};
