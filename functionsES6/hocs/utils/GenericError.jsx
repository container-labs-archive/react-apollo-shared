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
export default class GenericError extends React.Component {
  render() {
    const {
      classes,
      error, // eslint-disable-line
    } = this.props;

    return (
      <div className={classes.wrapper}>
        <Error />
      </div>
    );
  }
}
