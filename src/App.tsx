/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react';
import { Key } from 'react';
import './App.css';
import { Cards } from './Components/Cards';
import { Shoppingcart } from './Components/shoppingcart';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './Components/Home1'; 
import Nav from './Components/Nav';
import Search from './Components/Search1';
import Features from './Components/Features';
import Cart from './Components/Cart';
import { FaFileCode } from 'react-icons/fa';
import { Flex } from './Components/flex';
// import flex from './Components/flex';



const App = () => {
  return (
    <>
      <div>
        <Flex>
      
        <switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route  exact path="/search">
            <Search/>
          </Route>
          <Route exact path="/Features">
            <Features/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
            </Route>
        </switch>
        </Flex>
       
      </div >
    </>
  );
}

export default App;
