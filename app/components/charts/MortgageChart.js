import PropTypes from 'prop-types';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';
import { MortgageChartTooltip } from './MortgageChartTooltip';
import { palette } from '../../theme/palette';

export class MortgageChart extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    return <div>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={data} barGap={0} barCategoryGap={0} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <Tooltip content={<MortgageChartTooltip/>}/>
          <XAxis dataKey="date" hide={true}/>
          <YAxis dataKey="paidPrincipal"/>
          <Bar dataKey="paidPrincipal"fill={palette.primary.main} stackId="a"/>
          <Bar dataKey="paidInterest" fill={palette.primary.light} stackId="a"/>
        </BarChart>
      </ResponsiveContainer>
    </div>;
  }
}
MortgageChart.propTypes = {
  data: PropTypes.array
};
