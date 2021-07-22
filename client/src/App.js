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
import DeleteCourse from './components/DeleteCourse';
import './styles/global.css';
// import './styles/reset.css';
import withContext from './Context';
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CourseCreateWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const DeleteCourseWithContext = withContext(DeleteCourse);
const AuthWithContext = withContext(Authenticated);
const CourseDetailWithContext = withContext(CourseDetail);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderWithContext />
        <Switch>
          <Route exact path='/' component={Courses} />
          <PrivateRoute
            exact
            path='/courses/create'
            component={CourseCreateWithContext}
          />
          <PrivateRoute
            exact
            path='/courses/:id/delete'
            component={DeleteCourseWithContext}
          />
          <PrivateRoute
            exact
            path='/courses/:id/update'
            component={UpdateCourseWithContext}
          />
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
