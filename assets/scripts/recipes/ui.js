'use strict';

const indexRecipesSuccess = (data) => {
  console.log(data);
};

const addRecipeSuccess = () => {
  console.log("Recipe successfully added.");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexRecipesSuccess,
  addRecipeSuccess,
  failure
};
