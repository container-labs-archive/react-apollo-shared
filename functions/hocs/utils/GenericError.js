"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("babel-runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _styles = require("@material-ui/core/styles");

var _dec, _class;

var styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px'
  }
};
var GenericError = (_dec = (0, _styles.withStyles)(styles), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GenericError, _React$Component);

  function GenericError() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = GenericError.prototype;

  _proto.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        error = _props.error;
    return _react.default.createElement("div", {
      className: classes.wrapper
    }, _react.default.createElement(_Error.default, null));
  };

  return GenericError;
}(_react.default.Component)) || _class);
exports.default = GenericError;