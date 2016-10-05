'use strict';

const viewState = require('../viewstates/ui.js');

const addRecipeingredientSuccess = () => {
  // console.log("Recipeingredient successfully added");
};

const addRecipeSuccess = () => {
  viewState.setUserView();
  $('#instruction-forms').html('');
  $('#ingredient-forms').html('');
};

const failure = (error) => {
  // console.error(error);
};

module.exports = {
  addRecipeingredientSuccess,
  addRecipeSuccess,
  failure
};
