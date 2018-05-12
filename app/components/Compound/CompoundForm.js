import PropTypes from 'prop-types';
import React from 'react';
import { Paper, List, ListItem, TextField, Typography } from 'material-ui';
import { NumberFormatCurrency } from '../FormattedInputs/NumberFormatCurrency';
import { PCompoundData } from '../../proptypes';
import Localized from '../localization/Localized';
import { CompoundDuration } from './CompoundDuration';
import { CompoundRate } from './CompoundRate';

export const CompoundForm = ({data, onChange}) => {
  return <Paper>
    <List>
      <ListItem>
        <TextField
          fullWidth
          id="monthlyContribution"
          name="monthlyContribution"
          label={<Localized>MONTHLY_CONTRIBUTION</Localized>}
          value={data.monthlyContribution || ''}
          onChange={event => onChange({monthlyContribution: event.target.value})}
          InputProps={{
            inputComponent: NumberFormatCurrency
          }} />
      </ListItem>
      <ListItem>
        <CompoundRate
          value={data.interestRate || 0}
          onChange={interestRate => onChange({interestRate})}/>
        <CompoundDuration
          style={{marginLeft: '2rem'}}
          value={data.duration}
          onChange={duration => onChange({duration})}/>
      </ListItem>
      <ListItem>
        <div>
          <Typography variant="caption">
            <Localized>TOTAL_CONTRIBUTION</Localized>
          </Typography>
          <NumberFormatCurrency
            value={data.totalContribution || 0}
            displayType={'text'}
            renderText={value => <Typography color="primary" variant="title">{value}</Typography>}/>
        </div>
        <div style={{paddingLeft: '2rem'}}>
          <Typography variant="caption">
            <Localized>TOTAL_INTEREST</Localized>
          </Typography>
          <NumberFormatCurrency
            value={data.totalInterest || 0}
            displayType={'text'}
            renderText={value => <Typography color="primary" variant="title">{value}</Typography>}/>
        </div>
      </ListItem>
      <ListItem>
        <div>
          <Typography variant="body2">
            <Localized>TOTAL_COMPOUND</Localized>
          </Typography>
          <NumberFormatCurrency
            value={data.totalValue || 0}
            displayType={'text'}
            renderText={value => <Typography color="primary" variant="title">{value}</Typography>}/>
        </div>
      </ListItem>
    </List>
  </Paper>;
};
CompoundForm.propTypes = {
  data: PCompoundData,
  onChange: PropTypes.func
};
