import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

@withStyles(sytles)
export default class Loader extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <CircularProgress />
      </div>
    );
  }
}
