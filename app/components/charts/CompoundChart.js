import PropTypes from 'prop-types';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import React from 'react';
import { CompoundChartTooltip } from './CompoundChartTooltip';
import { palette } from '../../theme/palette';

export class CompoundChart extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    return <div>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Tooltip content={<CompoundChartTooltip/>}/>
          <XAxis dataKey="date" tick={false}/>
          <Area dataKey="totalValue" fillOpacity="1" stroke="none" fill={palette.primary.main}/>
          <Area dataKey="totalContribution" fillOpacity="1" stroke="none" fill={palette.primary.light}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>;
  }
}
CompoundChart.propTypes = {
  data: PropTypes.array
};
