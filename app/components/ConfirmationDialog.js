import PropTypes from 'prop-types';
import React from 'react';
import { Dialog, Button } from 'material-ui';
import { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import Localized from './localization/Localized';

export const ConfirmationDialog = ({onConfirm, onCancel, title, open, children}) => {
  return <Dialog open={open} aria-labelledby="confirm-dialog">
    <DialogTitle>
      {title}
    </DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onCancel ? onCancel(): null} color="primary">
        <Localized>CANCEL</Localized>
      </Button>
      <Button onClick={() => onConfirm()} color="primary">
        <Localized>OK</Localized>
      </Button>
    </DialogActions>
  </Dialog>;
};
ConfirmationDialog.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.node,
  open: PropTypes.bool,
  children: PropTypes.node
};
