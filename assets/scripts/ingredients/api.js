'use strict';

const app = require('../app');

const indexIngredients = () => {
  return $.ajax({
    url: app.host + '/ingredients',
    method: 'GET',
  });
};

module.exports = {
  indexIngredients
};
