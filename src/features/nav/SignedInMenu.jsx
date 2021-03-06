import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

const SignedInMenu = ({ signOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/createevent" text="Create Event" icon="plus" />
          <Dropdown.Item as={Link} to="/user/:id" text="My profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="Sign out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
