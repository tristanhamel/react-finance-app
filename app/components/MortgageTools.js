import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from 'material-ui';
import DeletIcon from '@material-ui/icons/Delete';
import TableIcon from '@material-ui/icons/GridOn';
import TilesIcon from '@material-ui/icons/Apps';
import PrintIcon from '@material-ui/icons/Print';

export const MortgageTools = ({onReset, onDisplayAsTable, onDisplayAsTiles, onPrint, displayAs}) => {
  return <div>
    <IconButton
      onClick={() => onDisplayAsTiles()}
      variant="fab"
      color={displayAs === 'tiles' ? 'primary' : 'default'}
      aria-label="tiles">
      <TilesIcon/>
    </IconButton>
    <IconButton
      onClick={() => onDisplayAsTable()}
      variant="fab"
      color={displayAs === 'table' ? 'primary' : 'default'}
      aria-label="tiles">
      <TableIcon/>
    </IconButton>
    {/*<IconButton*/}
      {/*onClick={() => onPrint()}*/}
      {/*variant="fab"*/}
      {/*color="default"*/}
      {/*aria-label="tiles">*/}
      {/*<PrintIcon/>*/}
    {/*</IconButton>*/}
    <IconButton
      onClick={() => onReset()}
      variant="fab"
      color="default"
      aria-label="reset">
      <DeletIcon/>
    </IconButton>
  </div>;
};
MortgageTools.propTypes = {
  onReset: PropTypes.func,
  onDisplayAsTable: PropTypes.func,
  onDisplayAsTiles: PropTypes.func,
  onPrint: PropTypes.func,
  displayAs: PropTypes.string
};
