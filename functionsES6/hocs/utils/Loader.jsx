import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LOADING_STYLES = {
  textAlign: 'center',
  marginTop: '20px',
};

export default function Loader() {
  return (
    <div style={LOADING_STYLES}>
      <CircularProgress />
    </div>
  );
}
