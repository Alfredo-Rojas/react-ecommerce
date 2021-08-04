import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/' component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
