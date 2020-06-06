import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { ROUTES } from "appConstants";

export default class LoginForm extends React.Component {

  state = {

    username: "",
    usernameError: "",
    password: "",
    passwordError: ""
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
      usernameError: "",
      passwordError: ""
    };

    if (this.state.username.length < 3) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 3 characters long";
    }
    if (this.state.username.indexOf(" ") !== -1) {
      isError = true;
      errors.usernameError = "Username should not contain space";
    }

    if(this.state.password.length < 8 ) {
      isError = true;
      errors.passwordError = "Password should be at least eight characters long"
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
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
            <TextField
            error = {this.state.usernameError.length > 0}
            name="username"
            hinttext="Username"
            label="Username"
            value={this.state.username}
            onBlur={e => this.onBlur(e)}
            onChange={e => this.change(e)}
            helperText={this.state.usernameError}
            floatinglabelfixed
            />
            <br />
            <TextField
            error = {this.state.passwordError.length > 0}
            name="password"
            hinttext="Password"
            label="Password"
            value={this.state.password}
            onChange={e => this.change(e)}
            helperText={this.state.passwordError}
            type="password"
            floatinglabelfixed
            />
            <br/>
            <br/>
            <Button variant="contained" 
            color="primary"  
            onClick={e => this.onSubmit(e)}>
            Login 
            </Button>
            <a href= {ROUTES.signUp}>
                 New user? Need to Sign up first. 
            </a>
            <br/>
            <p>
                {JSON.stringify(this.state.fields, null, 2)}
            </p>
        </form>
      </div>
    )
  }
  }