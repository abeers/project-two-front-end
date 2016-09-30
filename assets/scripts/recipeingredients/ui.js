'use strict';

const addRecipeingredientSuccess = () => {
  console.log("Recipeingredient successfully added");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  addRecipeingredientSuccess,
  failure
};
