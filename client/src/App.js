import './App.css';
import React, { Component } from 'react';
// import withContext from './Context';
import UserSignUp from './components/UserSignUp.js';
import UserSignIn from './components/UserSignIn.js';
import UserSignOut from './components/UserSignOut.js';
import Header from './components/Header';

// import { Provider } from './Context';

class App extends Component {
  render() {
    <div>
      <UserSignUp />
      <UserSignIn />
      <UserSignOut />
      <Header />
    </div>;
  }
}

export default App;
