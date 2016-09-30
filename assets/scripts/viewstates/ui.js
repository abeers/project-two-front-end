'use strict';

const setInitialView = () => {
  $('body').children('*').hide();
  $('#main-title').show();
  $('#main-image').show();
  $('.welcome-button').show();
};

const setSpinWheelView = () => {
  $('body').children('*').hide();
  $('nav').show();
};

module.exports = {
  setInitialView,
  setSpinWheelView
};
