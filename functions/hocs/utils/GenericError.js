"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GenericError;

var _react = _interopRequireDefault(require("react"));

var _Error = _interopRequireDefault(require("material-ui-icons/Error"));

const CONTAINER_STYLES = {
  textAlign: 'center',
  marginTop: '20px'
};

function GenericError(props) {
  const {
    error // eslint-disable-line

  } = props;
  return _react.default.createElement("div", {
    style: CONTAINER_STYLES
  }, _react.default.createElement(_Error.default, null));
}

module.exports = exports["default"];