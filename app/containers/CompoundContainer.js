import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import { Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles/index';
import { CompoundForm } from '../components/Compound/CompoundForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CompoundContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Grid container spacing={16}>
      <Grid item xs={12}>
        <CompoundForm />
      </Grid>
    </Grid>;
  }
}
CompoundContainer.propTypes = {

};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(CompoundContainer));
