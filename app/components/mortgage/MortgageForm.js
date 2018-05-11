import PropTypes from 'prop-types';
import React from 'react';
import { Paper, TextField, Typography, List, ListItem} from 'material-ui';
import { PMortgageData } from '../../proptypes';
import { NumberFormatCurrency } from '../FormattedInputs/NumberFormatCurrency';
import { CustomSwitch } from '../CustomSwitch';
import Localized from '../localization/Localized';
import { EditableText } from '../EditableText';
import { MortgageDownPaymentPc } from './MortgageDownPaymentPc';
import { MortgageAmortizationPeriod } from './MortgageAmortizationPeriod';
import { MortgageRate } from './MortgageRate';

export const MortgageForm = ({data, onChange, onBlur, isActive}) => {
  return <Paper elevation={isActive ? 16 : 2}>
    <List>
      <ListItem>
        <EditableText
          text={data.name}
          onConfirm={name => onChange({name})}
          title={<Localized>SCENARIO_TITLE</Localized>}>
          <Typography variant="title">
            {data.name}
          </Typography>
        </EditableText>
      </ListItem>
      <ListItem>
        {data.downPaymentMode === 'pc' ?
          <MortgageDownPaymentPc
            value={data.downPaymentPc}
            onChange={(downPaymentPc) => onChange({downPaymentPc})}
            onBlur={() => onBlur()}
          /> :
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
        <MortgageAmortizationPeriod
          withLabel={true}
          value={data.amortization}
          onChange={amortization => onChange({amortization})}
          onBlur={() => onBlur}/>
      </ListItem>
      <ListItem>
        <MortgageRate
          value={data.rate}
          withLabel={true}
          onChange={rate => onChange({rate})}
          onBlur={() => onBlur()}
        />
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
