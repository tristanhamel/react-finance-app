import PropTypes from 'prop-types';
import React from 'react';
import { Paper, TextField, ListItem, List } from 'material-ui';
import { NumberFormatCurrency } from './FormattedInputs/NumberFormatCurrency';
import Localized from './localization/Localized';

export const MortgageAskingPrice = ({askingPrice, onChange}) => {
  return (
    <Paper>
      <List>
        <ListItem>
          <TextField
            fullWidth
            id="askingPrice"
            name="askingPrice"
            label={<Localized>ASKING_PRICE</Localized>}
            value={askingPrice || ''}
            onChange={event => onChange({askingPrice: event.target.value})}
            InputProps={{
              inputComponent: NumberFormatCurrency
            }} />
        </ListItem>
      </List>
    </Paper>
  );
};
MortgageAskingPrice.propTypes = {
  askingPrice: PropTypes.number,
  onChange: PropTypes.func
};
