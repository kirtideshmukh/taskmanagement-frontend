import React, { useState } from 'react';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Button
} from 'reactstrap';
import { Redirect } from "react-router-dom";
import { ROUTES, apiHostUrl } from 'appConstants';
import { removeLocalStorageState } from "utils/localStorageHelpers.js"
import { loadLocalStorageState } from '../../utils/localStorageHelpers';

const Example = (props) => {
  const authToken = loadLocalStorageState() ? loadLocalStorageState().authToken : null
  const [isOpen, setIsOpen] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = ( )=> {
    console.log("Handle logout");
    
      //backend call
      const url = `${apiHostUrl}/api/auth/logout`;
      console.log(url);
      axios.post(url, {}, {
        headers: {'Authorization': authToken}
        }).then((response) => {

          if (response.status >=200 && response.status <300) {
          //redirect to Login form
          setRedirectToLogin(true)
          removeLocalStorageState()

        }
        }).catch((error) => {
          if (error.response) {
            if (error.response.status === 409) {
                this.errorMessageGenerator()
            }
          }
        })

  }

  if(redirectToLogin){
    return <Redirect to={ROUTES.login} />
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href={ROUTES.index}>Manage Ur Tasks</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
          </Nav>
          {/**TODO: add profile icon with dropdown containing
           * Edit profile
           * Change password
           * Logout
           */}
          
        </Collapse>
         {authToken && <Button onClick={ e =>handleLogout(e)}>Logout</Button>}
      </Navbar>
    </div>
  );
}

export default Example;
