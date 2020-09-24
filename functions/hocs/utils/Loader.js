"use strict";

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-names");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _styles = require("@material-ui/core/styles");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }

var styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px'
  }
};
var Loader = (_dec = (0, _styles.withStyles)(styles), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Loader, _React$Component);

  function Loader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Loader.prototype;

  _proto.render = function render() {
    var classes = this.props.classes;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.wrapper
    }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null));
  };

  return Loader;
}(_react["default"].Component)) || _class);
exports["default"] = Loader;