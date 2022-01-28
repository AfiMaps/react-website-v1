import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import INICIO from './components/pages/INICIO';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CADASTRARMEMBRO from './components/pages/CADASTRARMEMBRO';
import SOBRE from './components/pages/SOBRE';
import LOGIN from './components/pages/LOGIN';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={INICIO} />
          <Route path='/CADASTRAR' component={CADASTRARMEMBRO} />
          <Route path='/SOBRE' component={SOBRE} />
          <Route path='/LOGIN' component={LOGIN} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
