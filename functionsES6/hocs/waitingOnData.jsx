// @flow

import React from 'react';

import Loader from './utils/Loader';

// purposefully abstract, can be used for anything waiting for data
// not responsible for loading data
function waitingOnData(WrappedComponent) { // eslint-disable-line
  return class HOCWaitingOnData extends React.Component {
    props: {
      hasData: Boolean,
    };

    render() {
      const {
        hasData,
      } = this.props;

      let content = (
        <Loader />
      );
      if (hasData) {
        content = <WrappedComponent {...this.props} />;
      }

      return (
        <div>
          {content}
        </div>
      );
    }
  };
}

export default waitingOnData;
