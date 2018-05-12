import PropTypes from 'prop-types';
import React from 'react';
import LocalizedDate from '../localization/LocalizedDate';
import Localized from '../localization/Localized';
import { Typography, Card, CardContent } from 'material-ui';
import { NumberFormatCurrency } from '../FormattedInputs/NumberFormatCurrency';

export const CompoundChartTooltip = ({payload}) => {
  if(!payload || !payload.length) {
    return null;
  }
  return <Card>
    <CardContent>
      <div>
        <Typography color="textSecondary" variant="subheading">
          <LocalizedDate>
            {payload[0].payload.date}
          </LocalizedDate>
        </Typography>
      </div>
      <Typography component="p" style={{color: payload[0].color}}>
        <Localized>
          PRINCIPAL
        </Localized>: &nbsp;
        <NumberFormatCurrency
          value={payload[0].payload.paidPrincipal}
          displayType={'text'}/>
      </Typography>
      <Typography component="p" style={{color: payload[1].color}}>
        <Localized>
          INTERESTS
        </Localized>: &nbsp;
        <NumberFormatCurrency
          value={payload[0].payload.paidInterest}
          displayType={'text'}/>
      </Typography>
    </CardContent>
  </Card>;
};
CompoundChartTooltip.propTypes = {
  payload: PropTypes.array
};
