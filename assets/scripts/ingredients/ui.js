'use strict';

const indexIngredientsSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  indexIngredientsSuccess,
  failure
};
