import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component {
  state = {
    username: '',
    password: '',
    errors: [],
  };

  render() {
    const { username, password, errors } = this.state;

    return (
      <div>
        <div className=' form--centered'>
          <h1>Sign In</h1>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText='Sign In'
            elements={() => (
              <React.Fragment>
                <label>Email Address</label>
                <input
                  id='username'
                  name='username'
                  type='text'
                  value={username}
                  onChange={this.change}
                />
                <label>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={this.change}
                />
              </React.Fragment>
            )}
          />
          <p>
            Don't have a user account? Click here to
            <Link to='/signup'> sign up!</Link>
          </p>
        </div>
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  submit = () => {
    const { context } = this.props;
    const { from } = this.props.location.state || {
      from: { pathname: '/authenticated' },
    };
    const { username, password } = this.state;

    context.actions
      .signIn(username, password)
      .then((user) => {
        if (user === null) {
          this.setState(() => {
            return { errors: ['Sign-in was unsuccessful'] };
          });
        } else {
          this.props.history.push(from);
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.history.push('/error');
      });
  };

  cancel = () => {
    this.props.history.push('/');
  };
}
