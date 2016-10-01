'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const recipeApi = require('../recipes/api');
const ingredientApi = require('../ingredients/api');
const ui = require('./ui');

const onAddRecipeingredient = function (event) {
  event.preventDefault();
  let form = event.target;

  let data = getFormFields(form);

  api.addRecipeingredient(data)
    .done(ui.addRecipeingredientSuccess)
    .fail(ui.failure);
};

const onAddNewRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let rawData = getFormFields(form);

  let recipeData = {
    recipe: rawData.recipe
  };
  let ingredientData = {
    ingredient: rawData.ingredient
  };
  let recipeingredientData = {
    recipeingredient: rawData.recipeingredient
  };

  recipeApi.addRecipe(recipeData)
    .done(function (recipeResult) {
      recipeingredientData.recipeingredient.recipe_id = recipeResult.recipe.id;
      ingredientApi.addIngredient(ingredientData)
        .done(function (ingredientResult) {
          recipeingredientData.recipeingredient.ingredient_id = ingredientResult.ingredient.id;
          api.addRecipeingredient(recipeingredientData)
            .done(console.log('Success?'))
            .fail(ui.failure);
        })
        .fail(ui.failure);
      })
    .fail(ui.failure);

};

// const onSignUp = function (event) {
//   event.preventDefault();
//   let form = event.target;
//
//   let signUpData = getFormFields(form);
//
//   api.signUp(signUpData)
//   .done(function (data, textStatus, jqXHR) {
//     api.signIn(data, textStatus, jqXHR, signUpData)
//       .done(ui.signInSuccess)
//       .fail(ui.logInFailure);
//   })
//   .fail(ui.failure);
// };

const addHandlers = () => {
  $('#add-new-recipe').on('submit', onAddNewRecipe);
};

module.exports = {
  addHandlers
};
