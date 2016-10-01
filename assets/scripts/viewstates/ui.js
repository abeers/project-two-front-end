'use strict';

const setInitialView = () => {
  $('body').children('*').hide();
  $('#main-title').show();
  $('#main-image').show();
  $('br').show();
  $('.welcome-button').show();
};

const setUserView = () => {
  $('body').children('*').hide();
  $('nav').show();
  $('.option-button').show();
};

module.exports = {
  setInitialView,
  setUserView
};
