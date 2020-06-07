import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import SearchIcon from '@material-ui/icons/Search';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class SearchForm extends React.Component {
  state = {
    query: "",
    priority:"",
    label:"",
    from:"",
    to:"",
    range_error:"",
  };
 
  onBlur = e => {
    e.target.value = e.target.value.trim();
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
      range_error:"",
    };
  
    console.log(typeof(this.state.to));
    console.log(Date.parse(this.state.to) >= new Date());
    if(this.state.to.length !== this.state.from.length) {
      isError = true;
      errors.range_error = "Both From and To feilds required"
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
        query: "",
        priority:"",
        label:"",
        from:"",
        to:"",
        range_error:"",
      });
    }
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
      <div>
        
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div>
            <TextField
              name="query"
              hinttext="Text"
              label="Text"
              style={ {width: '25ch'}}
              value={this.state.query}
              onBlur={e => this.onBlur(e)}
              onChange={e => this.change(e)}
              floatinglabelfixed
            />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <FormControl >
            <InputLabel shrink>
              Priority
            </InputLabel>
            <NativeSelect
              name="priority" 
              onChange={e => this.change(e)}
              inputProps={{
                name: 'priority',
              }}
            >
              <option value="">All</option>
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </NativeSelect>
          </FormControl>

          <br/>
          <br/>

          <FormControl >
            <InputLabel shrink>
              Label
            </InputLabel>
            <NativeSelect
              name="label" 
              onChange={e => this.change(e)}
              inputProps={{
                name: 'label',
                id: 'age-native-label-placeholder',
              }}
            >
              <option value="">All</option>
              <option value={"Personal"}>Personal</option>
              <option value={"Work"}>Work</option>
              <option value={"Shopping"}>Shopping</option>
              <option value={"Others"}>Others</option>
            </NativeSelect>
          </FormControl>

          <br/>
          <TextField
            error = {this.state.range_error.length > 0}
            id="date"
            label="From"
            type="date"
            name="from"
            defaultValue={new Date()}
            onChange={e => this.change(e)}
            helperText={this.state.range_error}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            error = {this.state.range_error.length > 0}
            id="date"
            label="To"
            type="date"
            name="to"
            defaultValue={new Date()}
            onChange={e => this.change(e)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div style={{ 
        right:"400px",
        float:"right",
        }}>
        <SearchIcon onClick={e => this.onSubmit(e)}/>
      </div>
      </div>
     
      </form>
      </div>
    )
  }
  }