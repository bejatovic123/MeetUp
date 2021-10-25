import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Meet-Up
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sandbox' name='Capacity' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}

        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}

//iverted fix top is iverted color for contrst and fixed to the top
