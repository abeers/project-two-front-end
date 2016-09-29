'use strict';

const signUpSuccess = () => {
  console.log('Sign Up Success!');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signUpSuccess,
  failure
};
