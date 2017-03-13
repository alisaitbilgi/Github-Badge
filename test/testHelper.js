import "babel-polyfill";
import "whatwg-fetch";

// require all the test files in the test folder that end with Spec.js or Spec.jsx
var testsContext = require.context(".", true, /Spec.jsx?$/);
testsContext.keys().forEach(testsContext);


