import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default class StatusForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    status:props.status,
    isCheckDialogueOpen:false,
  };
  }
  
 
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
    this.props.callUpdateTask({status: this.state.status})

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
    
    const { toggleModal } = this.props;
    return (
      <div style={{ 
        marginLeft: "10%",
        marginRight: "10%",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        padding: "30px"
        }}>
      <form>

       <div>
      

       
        <ModalHeader> {"Choose a status you want to assign"}</ModalHeader>
        <ModalBody> 
            <FormControl >
              <FormLabel   >Status</FormLabel>
              <RadioGroup aria-label="status" name ="status" value={this.state.status} onChange={e => this.change(e)}>
                <FormControlLabel value="New" control={<Radio />} label="New" />
                <FormControlLabel value="InProgress" control={<Radio />} label="InProgress" />
                <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
              </RadioGroup>
            </FormControl>

        
      </ModalBody>
      <ModalFooter>
          <Button onClick={e => this.onSubmit(e)} color="primary">
            Save
          </Button>
          <Button onClick={toggleModal} color="secondary">
            Cancel
          </Button>
          </ModalFooter>
       
      </div>
      </form>
      </div>
    )
  }
  }
