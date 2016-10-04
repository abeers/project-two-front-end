'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const recipeApi = require('../recipes/api');
const ingredientApi = require('../ingredients/api');
const ui = require('./ui');

// const onAddRecipeingredient = function (event) {
//   event.preventDefault();
//   let form = event.target;
//
//   let data = getFormFields(form);
//
//   api.addRecipeingredient(data)
//     .done(ui.addRecipeingredientSuccess)
//     .fail(ui.failure);
// };

const onAddNewRecipe = function (event) {
  event.preventDefault();
  let form = event.target;

  let rawData = getFormFields(form);

  let recipeData = {
    recipe: rawData.recipe
  };

  let ingredientForms = $('.ingredient-form');

  let instructionForms = $('.instruction-form');

  recipeApi.addRecipe(recipeData)
    .done(function (recipeResult) {
      for (let i = 0; i < ingredientForms.length; i++) {
        let rawIngredientData = getFormFields(ingredientForms[i]);
        let ingredientData = {
          ingredient: rawIngredientData.ingredient
        };
        let recipeingredientData = {
          recipeingredient: rawIngredientData.recipeingredient
        };
        ingredientApi.addIngredient(ingredientData)
          .done(function (ingredientResult) {
            recipeingredientData.recipeingredient.recipe_id = recipeResult.recipe.id;
            recipeingredientData.recipeingredient.ingredient_id = ingredientResult.ingredient.id;
            api.addRecipeingredient(recipeingredientData)
              .done()
              .fail(ui.failure);
          })
          .fail(ui.failure);
        }
      for (let i = 0; i < instructionForms.length; i++) {
        let instructionData = getFormFields(instructionForms[i]);
        instructionData.instruction.recipe_id = recipeResult.recipe.id;
        api.addInstruction(instructionData)
          .done()
          .fail(ui.failure);
        }
      })

    .fail(ui.failure);

};

const addHandlers = () => {
  $('#add-new-recipe').on('submit', onAddNewRecipe);
};

module.exports = {
  addHandlers
};
