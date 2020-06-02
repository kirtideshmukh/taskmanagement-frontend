import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class SignUpForm extends React.Component {

  state = {
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
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if(this.state.firstName.length < 0) {
      isError = true;
      errors.firstNameError = "First name should not be empty"
    }

    if(this.state.lastName.length < 0) {
      isError = true;
      errors.lastNameError = "Last name should not be empty"
    }

    if (this.state.username.length < 3) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 3 characters long";
    }
    if (this.state.username.indexOf(" ") !== -1) {
      isError = true;
      errors.usernameError = "Username should not contain space";
    }

    if (this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
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
            error = {this.state.firstNameError.length > 0}
            name="firstName"
            hinttext="First name"
            label="First name"
            value={this.state.firstName}
            onBlur={e => this.onBlur(e)}
            onChange={e => this.change(e)}
            helperText={this.state.firstNameError}
            floatinglabelfixed
            />
            <br />
            <TextField
            error = {this.state.lastNameError.length > 0}
            name="lastName"
            hinttext="Last Name"
            label="Last Name"
            value={this.state.lastName}
            onBlur={e => this.onBlur(e)}
            onChange={e => this.change(e)}
            helperText={this.state.lastNameError}
            floatinglabelfixed
            />
            <br />
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
            error = {this.state.emailError.length > 0}
            name="email"
            hinttext="Email"
            label="Email"
            value={this.state.email}
            onBlur={e => this.onBlur(e)}
            onChange={e => this.change(e)}
            helperText={this.state.emailError}
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
            Sign up
            </Button>
            <br/>
            <p>
                {JSON.stringify(this.state.fields, null, 2)}
            </p>
        </form>
      </div>
    )
  }
  }