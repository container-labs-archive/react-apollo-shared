import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// hocs.... hocs all the way down
// @connect(store => ({
//   isAuthenticated: store.auth.isAuthenticated,
// }))

// @connect(store => ({
//   isAuthenticated: store.auth.isAuthenticated,
// }))
class Authenticated extends Component {
  constructor(WrappedComponent) {
    this.WrappedComponent = WrappedComponent;
  }

  componentWillMount() {
    this.redirectIfNotAuthenticated();
  }

  redirectIfNotAuthenticated = () => {
    const {
      isAuthenticated,
      dispatch,
    } = this.props;

    if (!isAuthenticated) {
      dispatch(push('/login'));
    }
  }

  render() {
    // Filter out extra props that are specific to this HOC and shouldn't be
    // passed through
    // const { extraProp, ...passThroughProps } = this.props;

    this.redirectIfNotAuthenticated();

    return (
      <this.WrappedComponent {...this.props} />
    );
  }
};

const WrappedAuthenticated = connect(store => ({
  isAuthenticated: store.auth.isAuthenticated,
}))(Authenticated)


function authenticated(WrappedComponent) {
  return new WrappedAuthenticated(WrappedComponent);
}

// @connect(store => ({
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

export {
  authenticated,
  // checkPermission,
  // requireAdmin,
};
