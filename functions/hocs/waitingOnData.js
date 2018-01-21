"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("babel-runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Loader = _interopRequireDefault(require("./utils/Loader"));

// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function waitingOnData(WrappedComponent) {
  // eslint-disable-line
  return class HOCWaitingOnData extends _react.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), Object.defineProperty(this, "props", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: void 0
      }), _temp;
    }

    render() {
      const {
        hasData
      } = this.props;

      let content = _react.default.createElement(_Loader.default, null);

      if (hasData) {
        content = _react.default.createElement(WrappedComponent, this.props);
      }

      return _react.default.createElement("div", null, content);
    }

  };
}

var _default = waitingOnData;
exports.default = _default;
module.exports = exports["default"];