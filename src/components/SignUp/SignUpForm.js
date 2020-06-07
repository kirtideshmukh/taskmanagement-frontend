import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import { Button } from '@material-ui/core';
import axios from 'axios';
import { apiHostUrl, ROUTES } from '../../appConstants';
import { saveLocalStorageState} from "utils/localStorageHelpers.js"
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
    passwordError: "",
    redirectToDashboard: false
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
    const err = this.validate();
    if (!err) {

      const data = {"email": this.state.email,
        "password":this.state.password,
        "username":this.state.username,
        "first_name":this.state.firstName,
        "last_name":this.state.lastName,
        }
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

      //backend call
      const url = `${apiHostUrl}/api/user/`;
      console.log(url);
      console.log(data);

      return axios.post(url, data).then((response) => {
        console.log({response})

          if (response.status >=200 && response.status <300) {
          //redirect to dashboard: get boards by email
          //store generated token to global state to use in entire app
          saveLocalStorageState({authToken: response.data.Authorization})
          this.setState({redirectToDashboard: true})
        }
        }).catch((error) => {
          if (error.response) {
            if (error.response.status === 409) {
                this.errorMessageGenerator()
            }
          }
        })

    }
  };

  render() {

    if(this.state.redirectToDashboard){
      return <Redirect to={ROUTES.dashboard} />;
    }

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
