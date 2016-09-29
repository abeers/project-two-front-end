'use strict';

const authEvents = require('./auth/events.js');
const recipeEvents = require('./recipes/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  recipeEvents.addHandlers();
});
