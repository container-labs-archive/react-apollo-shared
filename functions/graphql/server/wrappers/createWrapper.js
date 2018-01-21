"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("babel-runtime/helpers/extends"));

var _promise = _interopRequireDefault(require("babel-runtime/core-js/promise"));

var _firebase = _interopRequireDefault(require("../firebase"));

// add publish? right now handled in create functions
function createWrapper(collectionName, input, createFunction) {
  if (input === null) {
    return _promise.default.reject();
  }

  const collectionRef = _firebase.default.instance().ref(collectionName);

  const newModelRef = collectionRef.push();
  const model = (0, _extends2.default)({
    key: newModelRef.key,
    createDate: Date.now()
  }, input);
  console.log(`CREATE: ${collectionName} ${model.key}`);
  return createFunction(model, newModelRef).then(() => {
    return {
      status: 200,
      key: model.key,
      message: `appended to ${collectionName}`
    };
  }).catch(error => {
    console.error(error);
    return {
      status: 500,
      key: model.key,
      message: 'append failed',
      error
    };
  });
}

var _default = createWrapper;
exports.default = _default;
module.exports = exports["default"];