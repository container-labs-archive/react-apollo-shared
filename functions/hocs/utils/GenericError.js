"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _styles = require("@material-ui/core/styles");

var _dec, _class;

const styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px'
  }
};
let GenericError = (_dec = (0, _styles.withStyles)(styles), _dec(_class = class GenericError extends _react.default.Component {
  render() {
    const {
      classes,
      error // eslint-disable-line

    } = props;
    return _react.default.createElement("div", {
      className: classes.wrapper
    }, _react.default.createElement(_Error.default, null));
  }

}) || _class);
exports.default = GenericError;