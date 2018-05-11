import PropTypes from 'prop-types';
import React from 'react';
import { Typography, IconButton } from 'material-ui';
import ChartIcon from '@material-ui/icons/ShowChart';

export const NotEnoughData = ({scenario}) => {
  return <div style={{padding: '2rem'}}>
    <Typography color="textSecondary" align="center">
      <ChartIcon/>
    </Typography>
    <Typography variant="headline" color="textSecondary" align="center">
      We cannot display the chart just yet
    </Typography>
    <Typography variant="body1" color="textSecondary" align="center">
      Some values are missing to be able to recalculate the repayment schedule for {scenario.name}
    </Typography>
  </div>;
};
NotEnoughData.propTypes = {
  scenario: PropTypes.object
};
