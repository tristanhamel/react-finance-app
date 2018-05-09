import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem, Paper, TextField, Typography, List, ListItem} from 'material-ui';
import { PMortgageData } from '../proptypes';
import { NumberFormatCurrency } from './FormattedInputs/NumberFormatCurrency';
import { NumberFormatPc } from './FormattedInputs/NumberFormatPc';
import { NumberFormatYears } from './FormattedInputs/NumberFormatYears';
import { CustomSwitch } from './CustomSwitch';
import Localized from './localization/Localized';

export const MortgageForm = ({data, onChange, onBlur, isActive}) => {
  const downPaymentPcOptions = [
    {value: 0.05, label: '5%'},
    {value: 0.10, label: '10%'},
    {value: 0.15, label: '15%'},
    {value: 0.20, label: '20%'},
    {value: 0.30, label: '30%'},
    {value: 0.40, label: '40%'},
    {value: 0.50, label: '50%'}
  ];
  const amortizationOptions = [
    {value: 5, label: '5'},
    {value: 10, label: '10'},
    {value: 15, label: '15'},
    {value: 20, label: '20'},
    {value: 25, label: '25'},
    {value: 30, label: '30'}
  ];

  return <Paper elevation={isActive ? 16 : 2}>
    <List>
      <ListItem>
        <Typography variant="title">
          {data.name}
        </Typography>
      </ListItem>
      <ListItem>
        {data.downPaymentMode === 'pc' ?
          <TextField
            select
            fullWidth
            id="downPaymentPc"
            name="downPaymentPc"
            label={<Localized>DOWN_PAYMENT</Localized>}
            value={data.downPaymentPc || ''}
            onBlur={() => onBlur()}
            onChange={event => onChange({downPaymentPc: event.target.value})}
            InputProps={{
              inputComponent: NumberFormatPc,
            }}>
            {downPaymentPcOptions.map(option => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            {!downPaymentPcOptions.some(item => item.value === data.downPaymentPc) ?
              <MenuItem key={data.downPaymentPc} value={data.downPaymentPc}>
                {data.downPaymentPc * 100}%
              </MenuItem> : ''
            }
          </TextField> :
          <TextField
            fullWidth
            id="downPayment"
            name="downPayment"
            label="down payment"
            value={data.downPayment || ''}
            onBlur={() => onBlur()}
            onChange={event => onChange({downPayment: event.target.value})}
            InputProps={{
              inputComponent: NumberFormatCurrency,
            }}/>
        }
        <div style={{'paddingLeft': '1rem'}}>
          <CustomSwitch
            right={{label: '%', value: 'pc'}}
            left={{label: '$', value: 'currency'}}
            value={data.downPaymentMode}
            onChange={value => onChange({downPaymentMode: value})}
          />
        </div>
      </ListItem>
      <ListItem>
        <div>
          <Typography variant="body2">
            <Localized>TOTAL_MORTGAGE</Localized>
          </Typography>
          <NumberFormatCurrency
            value={data.totalRequired || 0}
            displayType={'text'}
            renderText={value => <Typography color="primary" variant="title">{value}</Typography>}/>
        </div>
      </ListItem>
      <ListItem>
        <TextField
          fullWidth
          select
          id="amortization"
          name="amortization"
          label={<Localized>AMORTIZATION_PERIOD</Localized>}
          value={data.amortization || ''}
          onBlur={() => onBlur()}
          onChange={event => onChange({amortization: event.target.value})}
          InputProps={{
            inputComponent: NumberFormatYears,
          }}>
          {amortizationOptions.map(option => (
            <MenuItem key={option.label + 'years'} value={option.value}>
              {option.label}  &nbsp; <Localized>YEARS</Localized>
            </MenuItem>
          ))}
        </TextField>
      </ListItem>
      <ListItem>
        <TextField
          fullWidth
          id="rate"
          name="rate"
          label={<Localized>MORTGAGE_RATE</Localized>}
          value={data.rate || ''}
          onBlur={() => onBlur()}
          onChange={event => onChange({rate: event.target.value})}
          InputProps={{
            inputComponent: NumberFormatPc,
          }} />
      </ListItem>
      <ListItem>
        <div>
          <Typography variant="caption">
            <Localized>TOTAL_MORTGAGE_PAYMENT</Localized>
          </Typography>
          <NumberFormatCurrency
            value={data.totalPayment || 0}
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
            renderText={value => <Typography color="primary" variant="title">{value}</Typography>}
          />
        </div>
      </ListItem>
      <ListItem>
        <div>
          <Typography variant="body2">
            <Localized>MONTHLY_PAYMENT</Localized>
          </Typography>
          <NumberFormatCurrency
            value={data.annuity || 0}
            displayType={'text'}
            renderText={value => <Typography color="primary" variant="title">{value}</Typography>}
          />
        </div>
      </ListItem>
    </List>
  </Paper>;
};
MortgageForm.propTypes = {
  data: PMortgageData,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isActive: PropTypes.bool
};
