import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class TaskForm extends React.Component {
  state = {
    title: "",
    titleError: "",
    description:"",
    priority:"Low",
    label:"None",
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


  validate = () => {
    let isError = false;
    const errors = {
      titleError: "",
    };
    if(this.state.title.length <= 0) {
      isError = true;
      errors.titleError = "Task title not be empty"
    }
    
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        title: "",
        titleError: "",
        description:"",
        priority:"Low",
        label:"None",
      });
    }
  };

  onCancel = e => {
    //TODO
    console.log("Cancelling the form");
  };
  
  
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
    )
  }
  }