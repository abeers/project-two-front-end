'use strict';

const indexIngredientsSuccess = (data) => {
  console.log(data);
};

const addIngredientSuccess = () => {
  console.log("Ingredient successfully added");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexIngredientsSuccess,
  addIngredientSuccess,
  failure
};
