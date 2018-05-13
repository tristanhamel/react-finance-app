import PropTypes from 'prop-types';
import React from 'react';
import { Paper, Typography } from 'material-ui';
import { MortgageChart } from './MortgageChart';
import { NotEnoughData } from '../mortgage/NotEnoughMortgageData';

export const MortgageChartContainer = ({data, scenario}) => {
  return <Paper>{data && data.length ?
    <div>
      <Typography
        variant="title"
        style={{padding: '1rem'}}>
        {scenario.name}</Typography>
      <MortgageChart data={data} />
    </div> :
    <NotEnoughData scenario={scenario} />
  }</Paper>;
};
MortgageChartContainer.propTypes = {
  data: PropTypes.array,
  currentScenario: PropTypes.any
};
