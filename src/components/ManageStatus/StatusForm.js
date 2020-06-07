import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import CheckIcon from '@material-ui/icons/Check';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export default class StatusForm extends React.Component {
  state = {
    status:"New",
    isCheckDialogueOpen:false,
  };
 
  onBlur = e => {
    e.target.value = e.target.value.trim()
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    this.onClickCheckCancel(e);
    e.preventDefault();
    console.log(this.state);

    this.setState({

      status:"New",
      isCheckDialogueOpen:false,
    });    
  };
  
  onClickCheck = e => {
    this.setState({
      isCheckDialogueOpen:true,
    });
  }
  onClickCheckCancel = e => {
    this.setState({
      isCheckDialogueOpen:false,
    });
  }
  render() {
    
    return (
      <div style={{ 
        marginLeft: "35%",
        marginRight: "25%",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        padding: "30px"
        }}>
      <form>

       <div>
      <CheckIcon onClick={e => this.onClickCheck(e)}/>

      <Dialog
        open={this.state.isCheckDialogueOpen}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        inputProps={{
        name: 'status',}}
      >
        <DialogTitle id="alert-dialog-title">{"Choose a status you want to assign"}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            <FormControl >
              <FormLabel   >Status</FormLabel>
              <RadioGroup aria-label="status" name ="status" value={this.state.status} onChange={e => this.change(e)}>
                <FormControlLabel value="New" control={<Radio />} label="New" />
                <FormControlLabel value="InProgress" control={<Radio />} label="InProgress" />
                <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
              </RadioGroup>
            </FormControl>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={e => this.onSubmit(e)} color="primary">
            Save
          </Button>
          <Button onClick={e =>this.onClickCheckCancel(e)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      </form>
      </div>
    )
  }
  }