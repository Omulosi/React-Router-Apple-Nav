import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  const { title, url} = props;

  return (
    <li>
      <NavLink to={url}>{title}</NavLink>
    </li>
  );
}


export default Nav;
