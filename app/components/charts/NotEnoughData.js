import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'material-ui';
import ChartIcon from '@material-ui/icons/ShowChart';
import Localized from '../localization/Localized';

export const NotEnoughData = ({scenario}) => {
  return <div style={{padding: '2rem'}}>
    <Typography color="textSecondary" align="center">
      <ChartIcon/>
    </Typography>
    <Typography variant="headline" color="textSecondary" align="center">
      <Localized>
        CANNOT_DISPLAY_CHART
      </Localized>
    </Typography>
    <Typography variant="body1" color="textSecondary" align="center">
      <Localized>MISSING_CHART_DATA</Localized> {scenario.name}
    </Typography>
  </div>;
};
NotEnoughData.propTypes = {
  scenario: PropTypes.object
};
