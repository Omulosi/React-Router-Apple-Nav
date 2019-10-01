import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const SubNav = (props) => {
  const { items} = props;

  return (
    <ul className="sub-nav">
      {
        items.map((item) => {
          return (
            <Nav title={item.name} url={item.name.toLowerCase()}/>
          );        
        })
      }
    </ul>
  );
}


export default SubNav;
