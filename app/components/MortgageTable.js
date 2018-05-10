import PropTypes from 'prop-types';
import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Paper } from 'material-ui';
import { EditableText } from './EditableText';
import Localized from './localization/Localized';
import { MortgageDownPaymentPc } from './MortgageDownPaymentPc';
import { NumberFormatCurrency } from './FormattedInputs/NumberFormatCurrency';
import { MortgageAmortizationPeriod } from './MortgageAmortizationPeriod';
import { MortgageRate } from './MortgageRate';

export const MortgageTable = ({data, onChange, onBlur}) => {
  return <Paper elevation={2}>
    <div style={{overflow: 'auto'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Localized>SCENARIO_TITLE</Localized>
            </TableCell>
            <TableCell>
              <Localized>DOWN_PAYMENT</Localized>
            </TableCell>
            <TableCell>
              <Localized>TOTAL_MORTGAGE</Localized>
            </TableCell>
            <TableCell>
              <Localized>AMORTIZATION_PERIOD</Localized>
            </TableCell>
            <TableCell>
              <Localized>MORTGAGE_RATE</Localized>
            </TableCell>
            <TableCell>
              <Localized>TOTAL_MORTGAGE_PAYMENT</Localized>
            </TableCell>
            <TableCell>
              <Localized>TOTAL_INTEREST</Localized>
            </TableCell>
            <TableCell>
              <Localized>MONTHLY_PAYMENT</Localized>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(scenario => {
            return <TableRow key={scenario.id}>
              <TableCell>
                <EditableText
                  text={scenario.name}
                  onConfirm={name => onChange({name, id: scenario.id})}
                  title={<Localized>SCENARIO_TITLE</Localized>}>
                  {scenario.name}
                </EditableText>
              </TableCell>
              <TableCell>
                <MortgageDownPaymentPc
                  value={scenario.downPaymentPc}
                  onChange={(downPaymentPc) => onChange({downPaymentPc, id: scenario.id})}
                  onBlur={() => onBlur(scenario.id)}
                  withLabel={false}/>
              </TableCell>
              <TableCell>
                <NumberFormatCurrency
                  value={scenario.totalRequired || 0}
                  displayType={'text'}/>
              </TableCell>
              <TableCell>
                <MortgageAmortizationPeriod
                  value={scenario.amortization}
                  onChange={amortization => onChange({amortization, id: scenario.id})}
                  onBlur={() => onBlur(scenario.id)}/>
              </TableCell>
              <TableCell>
                <MortgageRate
                  value={scenario.rate}
                  onChange={rate => onChange({rate, id: scenario.id})}
                  onBlur={() => onBlur(scenario.id)}
                  style={{width: '5rem'}}
                />
              </TableCell>
              <TableCell>
                <NumberFormatCurrency
                  value={scenario.totalPayment || 0}
                  displayType={'text'}/>
              </TableCell>
              <TableCell>
                <NumberFormatCurrency
                  value={scenario.totalInterest || 0}
                  displayType={'text'}/>
              </TableCell>
              <TableCell>
                <NumberFormatCurrency
                  value={scenario.annuity || 0}
                  displayType={'text'}/>
              </TableCell>
            </TableRow>;
          })}
        </TableBody>
      </Table>
    </div>
  </Paper>;
};
MortgageTable.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};
