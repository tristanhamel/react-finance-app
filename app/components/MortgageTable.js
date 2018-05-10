import PropTypes from 'prop-types';
import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import ChartIcon from '@material-ui/icons/ShowChart';
import { Paper, IconButton } from 'material-ui';
import { EditableText } from './EditableText';
import Localized from './localization/Localized';
import { MortgageDownPaymentPc } from './MortgageDownPaymentPc';
import { NumberFormatCurrency } from './FormattedInputs/NumberFormatCurrency';
import { MortgageAmortizationPeriod } from './MortgageAmortizationPeriod';
import { MortgageRate } from './MortgageRate';
import { TableColumnsPicker } from './TableColumnsPicker';

export const MortgageTable = ({data, onChange, onBlur, activeScenario, onSetActiveScenario, tableOptions, onChangeTableOptions}) => {
  const columnsOptions = [
    {value: 'totalRequired', label: 'TOTAL_MORTGAGE'},
    {value: 'totalPayment', label: 'TOTAL_MORTGAGE_PAYMENT'},
    {value: 'totalInterest', label: 'TOTAL_INTEREST'},
    {value: 'annuity', label: 'MONTHLY_PAYMENT'}
  ];

  return <Paper elevation={2}>
    <div style={{overflow: 'auto'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding={'checkbox'}>
              <TableColumnsPicker
                options={columnsOptions}
                onPick={visibleColumns => onChangeTableOptions({visibleColumns})}
                visibleColumns={tableOptions.visibleColumns}
              />
            </TableCell>
            <TableCell>
              <Localized>SCENARIO_TITLE</Localized>
            </TableCell>
            <TableCell>
              <Localized>DOWN_PAYMENT</Localized>
            </TableCell>
            {tableOptions.visibleColumns.includes('totalRequired') ? <TableCell>
              <Localized>TOTAL_MORTGAGE</Localized>
            </TableCell> : null}
            <TableCell>
              <Localized>AMORTIZATION_PERIOD</Localized>
            </TableCell>
            <TableCell>
              <Localized>MORTGAGE_RATE</Localized>
            </TableCell>
            {tableOptions.visibleColumns.includes('totalPayment') ? <TableCell>
              <Localized>TOTAL_MORTGAGE_PAYMENT</Localized>
            </TableCell> : null}
            {tableOptions.visibleColumns.includes('totalInterest') ? <TableCell>
              <Localized>TOTAL_INTEREST</Localized>
            </TableCell> : null}
            {tableOptions.visibleColumns.includes('annuity') ? <TableCell>
              <Localized>MONTHLY_PAYMENT</Localized>
            </TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(scenario => {
            return <TableRow
              key={scenario.id}
              selected={activeScenario === scenario.id}>
              <TableCell padding={'checkbox'}>
                <IconButton
                  color={activeScenario === scenario.id ? 'primary' : 'default'}
                  onClick={() => onSetActiveScenario(scenario.id)}>
                  <ChartIcon/>
                </IconButton>
              </TableCell>
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
              {tableOptions.visibleColumns.includes('totalRequired') ? <TableCell>
                <NumberFormatCurrency
                  value={scenario.totalRequired || 0}
                  displayType={'text'}/>
              </TableCell> : null}
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
              {tableOptions.visibleColumns.includes('totalPayment') ? <TableCell>
                <NumberFormatCurrency
                  value={scenario.totalPayment || 0}
                  displayType={'text'}/>
              </TableCell> : null}
              {tableOptions.visibleColumns.includes('totalInterest') ? <TableCell>
                <NumberFormatCurrency
                  value={scenario.totalInterest || 0}
                  displayType={'text'}/>
              </TableCell> : null}
              {tableOptions.visibleColumns.includes('annuity') ? <TableCell>
                <NumberFormatCurrency
                  value={scenario.annuity || 0}
                  displayType={'text'}/>
              </TableCell> : null}
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
  onBlur: PropTypes.func,
  activeScenario: PropTypes.any,
  onSetActiveScenario: PropTypes.func,
  tableOptions: PropTypes.any,
  onChangeTableOptions: PropTypes.func
};
