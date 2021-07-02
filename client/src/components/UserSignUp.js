import React, { useState, useEffect } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  return (
    <div className=''>
      <div className=''>
        <h1>Sign Up</h1>
        <Form
          cancel={this.cancel}
          errors={errors}
          submit={this.submit}
          submitButtonText='Sign Up'
          elements={() => (
            <React.Fragment>
              <input
                id='name'
                name='name'
                type='text'
                value={name}
                onChange={this.change}
                placeholder='Name'
              />
              <input
                id='username'
                name='username'
                type='text'
                value={username}
                onChange={this.change}
                placeholder='User Name'
              />
              <input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={this.change}
                placeholder='Password'
              />
            </React.Fragment>
          )}
        />
        <p>
          Already have a user account? <Link to='/signin'>Click here</Link> to
          sign in!
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
