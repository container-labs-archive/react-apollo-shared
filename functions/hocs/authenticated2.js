"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticated = authenticated;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterRedux = require("react-router-redux");

// hocs.... hocs all the way down
// @connect(store => ({
//   isAuthenticated: store.auth.isAuthenticated,
// }))
// @connect(store => ({
//   isAuthenticated: store.auth.isAuthenticated,
// }))
let Authenticated = class Authenticated extends _react.Component {
  constructor(WrappedComponent) {
    this.WrappedComponent = WrappedComponent;
  }

  componentWillMount() {
    this.redirectIfNotAuthenticated();
  }

  render() {
    // Filter out extra props that are specific to this HOC and shouldn't be
    // passed through
    // const { extraProp, ...passThroughProps } = this.props;
    this.redirectIfNotAuthenticated();
    return _react.default.createElement(this.WrappedComponent, this.props);
  }

};
;
const WrappedAuthenticated = (0, _reactRedux.connect)(store => ({
  isAuthenticated: store.auth.isAuthenticated
}))(Authenticated);

function authenticated(WrappedComponent) {
  return new WrappedAuthenticated(WrappedComponent);
} // @connect(store => ({
//   isAccessed: checkPermission(store),
// }))
// class RequireAdmin extends Component {
//   constructor(WrappedComponent) {
//     this.WrappedComponent = WrappedComponent;
//   }
//
//   componentWillMount() {
//     this.redirectIfPermissionDenied();
//   }
//
//   redirectIfPermissionDenied = () => {
//     const {
//       isAccessed,
//       dispatch,
//     } = this.props;
//
//     if (!isAccessed) {
//       dispatch(push('/home'));
//     }
//   }
//
//   render() {
//     this.redirectIfPermissionDenied();
//
//     return (
//       <this.WrappedComponent {...this.props} />
//     );
//   }
// };
//
// function requireAdmin(WrappedComponent) {
//   return new RequireAdmin(WrappedComponent);
// }
//
// const checkPermission = (store, permission) => {
//   const { users } = store;
//   if (!users || !users.selectedUserId) return false;
//   return true;
// }