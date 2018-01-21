import React from 'react';
import Error from 'material-ui-icons/Error';

const CONTAINER_STYLES = {
  textAlign: 'center',
  marginTop: '20px',
};

export default function GenericError(props) {
  const {
    error, // eslint-disable-line
  } = props;

  return (
    <div style={CONTAINER_STYLES}>
      <Error />
    </div>
  );
}
