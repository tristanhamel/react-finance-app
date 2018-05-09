import PropTypes from 'prop-types';
import React from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField } from 'material-ui';
import Localized from './localization/Localized';

export class EditableText extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      text: this.props.text,
      isOpened: false
    };
  }

  handleChange(text) {
    this.setState({text});
  }

  handleClose(confirm) {
    this.setState({isOpened: false});
    if(confirm) {
      this.props.onConfirm(this.state.text);
    } else {
      this.setState({text: this.props.text});
    }
  }

  handleOpen() {
    this.setState({isOpened: true});
  }

  render() {
    return <React.Fragment>
      <div onClick={() => this.handleOpen()}>
        {this.props.children}
      </div>
      <Dialog open={this.state.isOpened} aria-labelledby="edit-text-dialog">
        {this.props.title ? <DialogTitle>{this.props.title}</DialogTitle> : ''}
        <DialogContent>
          <TextField
            fullWidth
            id="edit-text-field"
            name="downPayment"
            value={this.state.text || ''}
            onChange={event => this.handleChange(event.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleClose(true)}>
            <Localized>OK</Localized>
          </Button>
          <Button onClick={() => this.handleClose(false)}>
            <Localized>CANCEL</Localized>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>;
  }
}
EditableText.propTypes = {
  text: PropTypes.string,
  onConfirm: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.node
};
