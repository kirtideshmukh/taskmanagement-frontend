import React from "react";
import { ModalBody, ModalFooter, Form, Input } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Modal from "components/Modals/index";
import FormInput from "components/shared/FormInput/FormInput.js";

const TaskModal = (props) => {

  const {
    buttonLabel,
    onBlurName,
    onChangeName,
    name,
    onSubmit,
    isSubmitting,
    serverErrors,
    toggleModal,
    modalState,
    modalTitle,
    nameError
  } = props;

  return (
    <div>
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        modalTitle={modalTitle}
      >
        <div style={{ 
        marginLeft: "35%",
        marginRight: "25%",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        padding: "30px"
        }}>
      <form>
        <TextField
          error = {this.state.titleError.length > 0}
          name="title"
          hinttext="Title"
          label="Title"
          variant="outlined"
          style={ {width: '25ch'}}
          value={this.state.title}
          onBlur={e => this.onBlur(e)}
          onChange={e => this.change(e)}
          helperText={this.state.titleError}
          floatinglabelfixed
        />
        <br />
        <br/>
        <TextField
          name="description"
          hinttext="Description"
          label="Description"
          variant="outlined"
          style={ {width: '35ch'}}
          value={this.state.description}
          onBlur={e => this.onBlur(e)}
          onChange={e => this.change(e)}
          floatinglabelfixed
        />

       <br/>
       <br/>
      <FormControl required >
        <InputLabel >Priority</InputLabel>
        <Select

          name="priority" 
          value={this.state.priority}
          onChange={e => this.change(e)}
        >
         
          <MenuItem value={"High"}>High</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Low"}>Low</MenuItem>
        </Select>
      </FormControl>
       

      <br/>
       <br/>
      <FormControl>
        <InputLabel >Label</InputLabel>
        <Select

          name="label" 
          value={this.state.label}
          onChange={e => this.change(e)}
        >
         <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Personal"}>Personal</MenuItem>
          <MenuItem value={"Work"}>Work</MenuItem>
          <MenuItem value={"Shopping"}>Shopping</MenuItem>
          <MenuItem value={"Others"}>Others</MenuItem>
        </Select>
      </FormControl>
        <br/>
        <br/>
        <Button variant="contained" 
        color="primary"  
        onClick={e => this.onSubmit(e)}>
        Save
        </Button>

        <Button variant="contained" 
        color="secondary"  
        paddingLeft = "15%"
        onClick= {e => this.onCancel(e)}>
        Cancel
        </Button>
      </form>
      </div>
    
      </Modal>
    </div>
  );
}

export default TaskModal;
