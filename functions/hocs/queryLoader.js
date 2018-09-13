"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("babel-runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Loader = _interopRequireDefault(require("./utils/Loader"));

var _GenericError = _interopRequireDefault(require("./utils/GenericError"));

// @no-flow
// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function queryLoader(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      (0, _inheritsLoose2.default)(HOCQueryLoader, _Component);

      function HOCQueryLoader() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _Component.call.apply(_Component, [this].concat(args)) || this, Object.defineProperty(_this, "props", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: void 0
        }), _temp) || _this;
      }

      var _proto = HOCQueryLoader.prototype;

      _proto.render = function render() {
        var data = this.props.data;
        var error = data ? data.error : undefined;
        var loading = data ? data.loading : false;

        var content = _react.default.createElement(_Loader.default, null); // doesn't handle when there are multiple concurrent requests


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
      };

      return HOCQueryLoader;
    }(_react.Component)
  );
}

var _default = queryLoader;
exports.default = _default;