// @flow

import React, { Component } from 'react';

function refetchOnMount(WrappedComponent) { // eslint-disable-line
  return class HOCWaitingOnData extends Component<{ data: Object }> {
    componentWillMount() {
      const {
        data,
      } = this.props;

      // cheap way at the cost of a network call to get updates to lists without writing to the local store the 'right way'
      // TODO: 'the right way' is to use apollo to update the local store
      data.refetch();
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}

export default refetchOnMount;
