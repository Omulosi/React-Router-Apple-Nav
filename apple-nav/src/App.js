import React from 'react';
import logo from './logo.svg';
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
    </div>
  );

}

export default App;
