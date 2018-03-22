// @no-flow

import React, { Component } from 'react';

import Loader from './utils/Loader';
import GenericError from './utils/GenericError';

// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function queryLoader(WrappedComponent) {
  return class HOCQueryLoader extends Component {
    props: {
      data: Object,
    };

    render() {
      const {
        data,
      } = this.props;
      const error = data ? data.error : undefined;
      const loading = data ? data.loading : false;

      let content = (
        <Loader />
      );

      // doesn't handle when there are multiple concurrent requests
      if (!loading) {
        if (error) {
          content = <GenericError error={error.message} />;
        } else {
          content = <WrappedComponent {...this.props} />;
        }
      }

      return content;
    }
  };
}

export default queryLoader;
