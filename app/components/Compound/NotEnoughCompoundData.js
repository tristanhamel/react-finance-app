import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'material-ui';
import ChartIcon from '@material-ui/icons/ShowChart';
import Localized from '../localization/Localized';

export const NotEnoughCompoundData = () => {
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
      <Localized>MISSING_COMPOUND_CHART_DATA</Localized>
    </Typography>
  </div>;
};
NotEnoughCompoundData.propTypes = {};
