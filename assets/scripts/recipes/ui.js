'use strict';

const indexRecipesSuccess = (data) => {
  console.log(data);
};

const addRecipeSuccess = () => {
  console.log("Recipe successfully added.");
};

const updateRecipeSuccess = () => {
  console.log("Recipe successfully updated.");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexRecipesSuccess,
  addRecipeSuccess,
  updateRecipeSuccess,
  failure
};
