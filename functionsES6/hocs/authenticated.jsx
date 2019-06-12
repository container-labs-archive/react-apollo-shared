import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

// hocs.... hocs all the way down
@connect(store => ({
  isAuthenticated: store.auth.isAuthenticated,
}))
export function authenticated(WrappedComponent) {
  return class HOCLoader extends React.Component {
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
      this.redirectIfNotAuthenticated();

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}

@connect(store => ({
  isAccessed: checkPermission(store),
}))
export function requireAdmin(WrappedComponent) {
  return class HOCLoader extends React.Component {
    componentWillMount() {
      this.redirectIfPermissionDenied();
    }

    redirectIfPermissionDenied = () => {
      const {
        isAccessed,
        dispatch,
      } = this.props;

      if (!isAccessed) {
        dispatch(push('/app-home'));
      }
    }

    render() {
      this.redirectIfPermissionDenied();

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}

export const checkPermission = (store, permission) => {
  const { users } = store;
  if (!users || !users.selectedUserId) return false;
  return true;
}
