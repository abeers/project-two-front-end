'use strict';

const app = require('../app');

const indexIngredients = () => {
  return $.ajax({
    url: app.host + '/ingredients',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // }
  });
};

const addIngredient = (data) => {
  return $.ajax({
    url: app.host + '/ingredients',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // },
    data: data
  });
};

module.exports = {
  indexIngredients,
  addIngredient
};
