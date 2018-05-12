import PropTypes from 'prop-types';
import React from 'react';
import { Paper, Typography } from 'material-ui';
import { CompoundChart } from './CompoundChart';
import { NotEnoughCompoundData } from './NotEnoughCompoundData';
import Localized from '../localization/Localized';

export const CompoundChartContainer = ({data}) => {
  return <Paper>{data && data.length ?
    <div>
      <Typography
        variant="title"
        style={{padding: '1rem'}}>
        <Localized>COMPOUND_INTERESTS</Localized>
      </Typography>
      <CompoundChart data={data} />
    </div> :
    <NotEnoughCompoundData/>
  }</Paper>;
};
CompoundChartContainer.propTypes = {
  data: PropTypes.array
};
