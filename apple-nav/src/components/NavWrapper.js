import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const NavWrapper = (props) => {
  const { navTitles } = props;

  return (
    <ul className='nav-wrapper'>
      <li className="logo">
        <NavLink to="/">Apple</NavLink>
      </li>
      { navTitles.map((navObj) => {
        return <Nav title={navObj.name} url={navObj.url} className="nav-item"/>
      })}
      <li className="search">Search</li>
      <li className="bag">Bag</li>
    </ul>
  );
}

export default NavWrapper;
