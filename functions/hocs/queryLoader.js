"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("babel-runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Loader = _interopRequireDefault(require("./utils/Loader"));

var _GenericError = _interopRequireDefault(require("./utils/GenericError"));

// @no-flow
// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function queryLoader(WrappedComponent) {
  return class HOCQueryLoader extends _react.Component {
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
        data
      } = this.props;
      const error = data ? data.error : undefined;
      const loading = data ? data.loading : false;

      let content = _react.default.createElement(_Loader.default, null); // doesn't handle when there are multiple concurrent requests


      if (!loading) {
        if (error) {
          content = _react.default.createElement(_GenericError.default, {
            error: error.message
          });
        } else {
          content = _react.default.createElement(WrappedComponent, this.props);
        }
      }

      return content;
    }

  };
}

var _default = queryLoader;
exports.default = _default;
module.exports = exports["default"];