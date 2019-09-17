import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';


const appleNav = [
  {
    url: 'mac',
    name: 'Mac',
    items: [
      {name: 'MacBook Air'},
      {name: 'MacBook Pro'},
      {name: 'iMac'},
      {name: 'iMac Pro'},
      {name: 'Mac Pro'},
      {name: 'Mac Mini'},
      {name: 'Pro Display XDR'},
      {name: 'Accessories'},
      {name: 'Catalina'}
    ]
  },
  {
    url: 'ipad',
    name: 'iPad',
    items: [
      {name: 'iPad Air'},
      {name: 'iPad Pro'},
      {name: 'iPad'},
      {name: 'iPad Mini'},
      {name: 'Compare'},
      {name: 'Apple Pencil'},
      {name: 'Smart Keyboard'},
      {name: 'Accessories'},
      {name: 'iPadOs'}
    ]
  },
  {
    url: 'iphone',
    name: 'iPhone',
    items: []
  },
  {
    url: 'watch',
    name: 'Watch',
    items: []
  },
  {
    url: 'tv',
    name: 'TV',
    items: []
  },
  {
    url: 'music',
    name: 'Music',
    items: []
  },
  {
    url: 'support',
    name: 'Support',
    items: []
  }
]

function App() {

  return (
    <div className="container">
      <NavWrapper navTitles={appleNav} />
      <Route exact path="/" render={() => {
          return (
            <div className="main-body">
              <h1>Apple Products</h1>
            </div>
          )
        }}
      />
      
      <Route path="/:name" render={(props) =>{
        const name = props.match.params.name;
        const obj = appleNav.find((nav) => {
          return nav.url === name;
        });
        return <SubNav items={obj.items} />
      } } />
    </div>
  );
}

export default App;
