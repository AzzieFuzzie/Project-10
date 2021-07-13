import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserSignUp from './components/UserSignUp.js';
import UserSignIn from './components/UserSignIn.js';
import UserSignOut from './components/UserSignOut.js';
import Header from './components/Header';
import Courses from './components/Courses';
import PrivateRoute from './PrivateRoute';
import Authenticated from './components/Authenticated';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';
import CreateCourse from './components/CreateCourse';
import './styles/global.css';
// import './styles/reset.css';
import withContext from './context';
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CourseCreateWithContext = withContext(CreateCourse);
const AuthWithContext = withContext(Authenticated);
const CourseDetailWithContext = withContext(CourseDetail);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className='container'>
            <HeaderWithContext />
            <Route exact path='/' component={Courses} />
            <Route
              exact
              path='/courses/create'
              component={CourseCreateWithContext}
            />
            <Route exact path='/courses/:id/update' component={UpdateCourse} />
            <Route
              exact
              path='/courses/:id'
              component={CourseDetailWithContext}
            />
            <Route exact path='/signin' component={UserSignInWithContext} />
            <Route exact path='/signup' component={UserSignUpWithContext} />
            <Route exact path='/signout' component={UserSignOutWithContext} />
            <PrivateRoute
              exact
              path='/authenticated'
              component={AuthWithContext}
            />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
