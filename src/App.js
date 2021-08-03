import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';

const Hats = () => {
  return (
    <h2>Shop Hats!</h2>
  )
}


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/shop/hats/' component={Hats} />
      </Switch>
    </Router>
  );
}

export default App;
