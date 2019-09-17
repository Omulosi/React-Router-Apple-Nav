import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';


const appleNav = [
  {
    url: '/mac',
    name: 'Mac'
  },
  {
    url: '/ipad',
    name: 'iPad'
  },
  {
    url: '/iphone',
    name: 'iPhone'
  },
  {
    url: '/watch',
    name: 'Watch'
  },
  {
    url: '/tv',
    name: 'TV'
  },
  {
    url: '/music',
    name: 'Music'
  },
  {
    url: '/support',
    name: 'Support'
  }
]

function App() {

  return (
    <div className="container">
      <NavWrapper navTitles={appleNav} />
      <Route path="/" render={() => {
          return (
            <div className="main-body">
              <h1>Apple Products</h1>
            </div>
          )
        }}
      />
    </div>
  );
}

export default App;
