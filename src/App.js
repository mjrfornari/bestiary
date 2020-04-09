import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Icon } from 'react-icons-kit'
import {login} from 'react-icons-kit/iconic/login'
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart'
import {person} from 'react-icons-kit/iconic/person'

import Home from './Pages/Home'
import HomeAside from './Pages/HomeAside'
import Bestiaries from './Pages/Bestiaries'
import BestiaryDetail from './Pages/BestiaryDetail'
import Construction from './Pages/Construction'

import './App.css';

function App() {
  return (
    <div id="app">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navBar">
        <Navbar.Brand href="/">
          <div className="title">
            <img className="perfil" src='/Logo_bestiary.png' alt="logo"/>
            {/* <p className="logo">BESTIARY</p> */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/hunt">Hunts</Nav.Link>
            <Nav.Link href="/bestiary">Bestiary</Nav.Link>
            <Nav.Link href="/charms">Charms</Nav.Link>
            <Nav.Link href="/quests">Quests</Nav.Link>
            <Nav.Link href="/imbuements">Imbuements</Nav.Link>
            <Nav.Link href="/analysis">Analysis</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/shop"><Icon icon={shoppingCart} size={25} id="shopIcon"/>Shop</Nav.Link>
            <Nav.Link href="/register"><Icon icon={person} size={25} id="registerIcon"/>Register</Nav.Link>
            <Nav.Link href="/login"><Icon icon={login} size={25} id="loginIcon"/>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="Body">
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
              (<div className="scrollWrapper">
                <div className="Home">
                  <Home/>
                </div>
                <div className="HomeAside">
                  <HomeAside/>
                </div>
              </div>)} default/>
              <Route exact path='/bestiary' render={() => 
              (<div className="scrollWrapper">
                <div className="Bestiary">
                  <Bestiaries/>
                </div>
                <div className="HomeAside">
                  <HomeAside/>
                </div>
              </div>)}/>
              <Route exact path='/bestiary-detail' render={() => 
              (<div className="scrollWrapper">
                <div className="BestiaryDetail">
                  <BestiaryDetail/>
                </div>
                {/* <div className="HomeAside">
                  <HomeAside/>
                </div> */}
              </div>)}/>
              <Route extact path='/construction' render={() => 
              (<>
                <div className="Construction">
                  <Construction/>
                </div>
              </>)} default/>
            <Redirect to='/construction'/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
