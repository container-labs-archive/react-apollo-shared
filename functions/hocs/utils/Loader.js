"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _styles = require("@material-ui/core/styles");

var _dec, _class;

const styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px'
  }
};
let Loader = (_dec = (0, _styles.withStyles)(sytles), _dec(_class = class Loader extends _react.default.Component {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.wrapper
    }, _react.default.createElement(_CircularProgress.default, null));
  }

}) || _class);
exports.default = Loader;