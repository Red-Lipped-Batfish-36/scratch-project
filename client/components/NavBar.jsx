import React from 'react';

const NavBar = props => {
  const {user, logOut} = props;

  return (
  <div id='navbar'>
    <p id='logo'>Traker</p>
    <NavLink to="/">
      <button type="button" id="log-out" onClick={logOut(user)}>
        Log Out
      </button>
    </NavLink>
  </div>
  );
};

export default NavBar;