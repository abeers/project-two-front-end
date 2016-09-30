'use strict';

const authEvents = require('./auth/events.js');
const recipeEvents = require('./recipes/events.js');
const ingredientEvents = require('./ingredients/events.js');
const recipeingredientEvents = require('./recipeingredients/events.js');
const viewStateEvents = require('./viewstates/events.js');

const viewStateUi = require('./viewstates/ui.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  recipeEvents.addHandlers();
  ingredientEvents.addHandlers();
  recipeingredientEvents.addHandlers();
  viewStateEvents.addHandlers();
  viewStateUi.setInitialView();
});
