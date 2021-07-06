import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useParams,
} from 'react-router-dom';
// import withContext from './Context';
import UserSignUp from './components/UserSignUp.js';
import UserSignIn from './components/UserSignIn.js';
import UserSignOut from './components/UserSignOut.js';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';
import CreateCourse from './components/CreateCourse';

// import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Route exact path='/' component={Courses} />
          <Route path='/courses/create' component={CreateCourse} />
          <Route path='/courses/:id/update' component={UpdateCourse} />
          <Route path='/courses/:id' component={CourseDetail} />
          <Route path='/signin' component={UserSignIn} />
          <Route path='/signup' component={UserSignUp} />
          <Route path='/signout' component={UserSignOut} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
