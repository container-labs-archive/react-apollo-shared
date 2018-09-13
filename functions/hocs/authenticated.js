"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticated = authenticated;
exports.requireAdmin = requireAdmin;
exports.checkPermission = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("babel-runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterRedux = require("react-router-redux");

function authenticated(WrappedComponent) {
  var _dec, _class2;

  return (// hocs.... hocs all the way down
    _dec = (0, _reactRedux.connect)(function (store) {
      return {
        isAuthenticated: store.auth.isAuthenticated
      };
    }), _dec(_class2 =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inheritsLoose2.default)(HOCLoader, _React$Component);

      function HOCLoader() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, Object.defineProperty(_this, "redirectIfNotAuthenticated", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {
            var _this$props = _this.props,
                isAuthenticated = _this$props.isAuthenticated,
                dispatch = _this$props.dispatch;

            if (!isAuthenticated) {
              dispatch((0, _reactRouterRedux.push)('/login'));
            }
          }
        }), _temp) || _this;
      }

      var _proto = HOCLoader.prototype;

      _proto.componentWillMount = function componentWillMount() {
        this.redirectIfNotAuthenticated();
      };

      _proto.render = function render() {
        this.redirectIfNotAuthenticated();
        return _react.default.createElement(WrappedComponent, this.props);
      };

      return HOCLoader;
    }(_react.default.Component)) || _class2
  );
}

function requireAdmin(WrappedComponent) {
  var _dec2, _class4;

  return _dec2 = (0, _reactRedux.connect)(function (store) {
    return {
      isAccessed: checkPermission(store)
    };
  }), _dec2(_class4 =
  /*#__PURE__*/
  function (_React$Component2) {
    (0, _inheritsLoose2.default)(HOCLoader, _React$Component2);

    function HOCLoader() {
      var _temp2, _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_temp2 = _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this, Object.defineProperty(_this2, "redirectIfPermissionDenied", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          var _this2$props = _this2.props,
              isAccessed = _this2$props.isAccessed,
              dispatch = _this2$props.dispatch;

          if (!isAccessed) {
            dispatch((0, _reactRouterRedux.push)('/app-home'));
          }
        }
      }), _temp2) || _this2;
    }

    var _proto2 = HOCLoader.prototype;

    _proto2.componentWillMount = function componentWillMount() {
      this.redirectIfPermissionDenied();
    };

    _proto2.render = function render() {
      this.redirectIfPermissionDenied();
      return _react.default.createElement(WrappedComponent, this.props);
    };

    return HOCLoader;
  }(_react.default.Component)) || _class4;
}

var checkPermission = function checkPermission(store, permission) {
  var users = store.users;
  if (!users || !users.selectedUserId) return false;
  return true;
};

exports.checkPermission = checkPermission;