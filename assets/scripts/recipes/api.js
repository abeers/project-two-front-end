'use strict';

const app = require('../app');

const addRecipe = (data) => {
  return $.ajax({
    url: app.host + '/recipes',
    method: 'POST',
    data: data
  });
};

module.exports = {
  addRecipe
};
