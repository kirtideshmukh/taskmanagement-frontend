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
import { ROUTES } from 'appConstants';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = ( )=> {
    console.log("Handle logout");

      //backend call
      const url = '/api/auth/logout';
      console.log(url);
      axios.post(url, {}, {
        headers: {'Authorization': 'token'}
        }).then((response) => {

          if (response.status === 200) {
          //redirect to Login form
        }
        }).catch((error) => {
          if (error.response) {
            if (error.response.status === 409) {
                this.errorMessageGenerator()
            }
          }
        })

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
          <NavbarText>Profile Icon</NavbarText>
        </Collapse>
        <Button onClick={ e =>handleLogout(e)}>Logout</Button>
      </Navbar>
    </div>
  );
}

export default Example;
