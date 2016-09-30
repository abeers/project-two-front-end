'use strict';

const setInitialView = () => {
  $('body').children('*').hide();
  $('#main-title').show();
  $('#main-image').show();
  $('br').show();
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
