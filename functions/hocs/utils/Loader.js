"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loader;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

const LOADING_STYLES = {
  textAlign: 'center',
  marginTop: '20px'
};

function Loader() {
  return _react.default.createElement("div", {
    style: LOADING_STYLES
  }, _react.default.createElement(_CircularProgress.default, null));
}