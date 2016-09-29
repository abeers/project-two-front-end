'use strict';

const authEvents = require('./auth/events.js');
const recipeEvents = require('./recipes/events.js');
const ingredientEvents = require('./ingredients/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  recipeEvents.addHandlers();
  ingredientEvents.addHandlers();
});
