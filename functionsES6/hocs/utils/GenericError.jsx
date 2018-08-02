import React from 'react';
import Error from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

@withStyles(styles)
export default function GenericError(props) {
  const {
    classes,
    error, // eslint-disable-line
  } = props;

  return (
    <div className={classes.wrapper}>
      <Error />
    </div>
  );
}
