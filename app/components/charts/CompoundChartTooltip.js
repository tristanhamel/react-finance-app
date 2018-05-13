import PropTypes from 'prop-types';
import React from 'react';
import LocalizedDate from '../localization/LocalizedDate';
import { Typography, Card, } from 'material-ui';
import { CardContent } from 'material-ui/Card';
import { NumberFormatCurrency } from '../FormattedInputs/NumberFormatCurrency';

export const CompoundChartTooltip = ({payload}) => {
  if(!payload || !payload.length) {
    return null;
  }
  return <Card>
    <CardContent>
      <div>
        <Typography color="textSecondary" variant="subheading">
          <LocalizedDate format={{year: 'numeric'}}>
            {payload[0].payload.date}
          </LocalizedDate>
        </Typography>
      </div>
      <Typography component="p" style={{color: payload[0].fill}}>
        <NumberFormatCurrency
          value={payload[0].payload.totalValue}
          displayType={'text'}/>
      </Typography>
    </CardContent>
  </Card>;
};
CompoundChartTooltip.propTypes = {
  payload: PropTypes.array
};
