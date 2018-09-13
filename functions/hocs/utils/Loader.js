"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("babel-runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _styles = require("@material-ui/core/styles");

var _dec, _class;

var styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px'
  }
};
var Loader = (_dec = (0, _styles.withStyles)(styles), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Loader, _React$Component);

  function Loader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Loader.prototype;

  _proto.render = function render() {
    var classes = this.props.classes;
    return _react.default.createElement("div", {
      className: classes.wrapper
    }, _react.default.createElement(_CircularProgress.default, null));
  };

  return Loader;
}(_react.default.Component)) || _class);
exports.default = Loader;