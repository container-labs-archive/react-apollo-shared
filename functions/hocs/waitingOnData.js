"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("babel-runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Loader = _interopRequireDefault(require("./utils/Loader"));

// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function waitingOnData(WrappedComponent) {
  // eslint-disable-line
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inheritsLoose2.default)(HOCWaitingOnData, _React$Component);

      function HOCWaitingOnData() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, Object.defineProperty(_this, "props", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: void 0
        }), _temp) || _this;
      }

      var _proto = HOCWaitingOnData.prototype;

      _proto.render = function render() {
        var hasData = this.props.hasData;

        var content = _react.default.createElement(_Loader.default, null);

        if (hasData) {
          content = _react.default.createElement(WrappedComponent, this.props);
        }

        return _react.default.createElement("div", null, content);
      };

      return HOCWaitingOnData;
    }(_react.default.Component)
  );
}

var _default = waitingOnData;
exports.default = _default;