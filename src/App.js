import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import SignInSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <Router>
      {console.log(this.state.currentUser)}
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop/' component={ShopPage} />
          <Route path='/signin' component={SignInSignOut} />
        </Switch>
      </Router>
    );
  }
}

