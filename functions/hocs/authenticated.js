"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticated = authenticated;
exports.requireAdmin = requireAdmin;
exports.checkPermission = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterRedux = require("react-router-redux");

function authenticated(WrappedComponent) {
  var _dec, _class2;

  return (// hocs.... hocs all the way down
    _dec = (0, _reactRedux.connect)(store => ({
      isAuthenticated: store.auth.isAuthenticated
    })), _dec(_class2 = class HOCLoader extends _react.default.Component {
      constructor(...args) {
        var _temp;

        return _temp = super(...args), Object.defineProperty(this, "redirectIfNotAuthenticated", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: () => {
            const {
              isAuthenticated,
              dispatch
            } = this.props;

            if (!isAuthenticated) {
              dispatch((0, _reactRouterRedux.push)('/login'));
            }
          }
        }), _temp;
      }

      componentWillMount() {
        this.redirectIfNotAuthenticated();
      }

      render() {
        this.redirectIfNotAuthenticated();
        return _react.default.createElement(WrappedComponent, this.props);
      }

    }) || _class2
  );
}

function requireAdmin(WrappedComponent) {
  var _dec2, _class4;

  return _dec2 = (0, _reactRedux.connect)(store => ({
    isAccessed: checkPermission(store)
  })), _dec2(_class4 = class HOCLoader extends _react.default.Component {
    constructor(...args) {
      var _temp2;

      return _temp2 = super(...args), Object.defineProperty(this, "redirectIfPermissionDenied", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: () => {
          const {
            isAccessed,
            dispatch
          } = this.props;

          if (!isAccessed) {
            dispatch((0, _reactRouterRedux.push)('/app-home'));
          }
        }
      }), _temp2;
    }

    componentWillMount() {
      this.redirectIfPermissionDenied();
    }

    render() {
      this.redirectIfPermissionDenied();
      return _react.default.createElement(WrappedComponent, this.props);
    }

  }) || _class4;
}

const checkPermission = (store, permission) => {
  const {
    users
  } = store;
  if (!users || !users.selectedUserId) return false;
  return true;
};

exports.checkPermission = checkPermission;