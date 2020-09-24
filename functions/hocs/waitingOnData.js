"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.create");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-names");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Loader = _interopRequireDefault(require("./utils/Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _defaults(subClass, superClass); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function waitingOnData(WrappedComponent) {
  var _temp;

  // eslint-disable-line
  return _temp = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(HOCWaitingOnData, _React$Component);

    function HOCWaitingOnData() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "props", void 0);

      return _this;
    }

    var _proto = HOCWaitingOnData.prototype;

    _proto.render = function render() {
      var hasData = this.props.hasData;

      var content = /*#__PURE__*/_react["default"].createElement(_Loader["default"], null);

      if (hasData) {
        content = /*#__PURE__*/_react["default"].createElement(WrappedComponent, this.props);
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, content);
    };

    return HOCWaitingOnData;
  }(_react["default"].Component), _temp;
}

var _default = waitingOnData;
exports["default"] = _default;