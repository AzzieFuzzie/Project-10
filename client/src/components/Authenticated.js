import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({ context }) => {
  const authUser = context.authenticatedUser;
  return (
    <div className='bounds'>
      <div className='grid-100'>
        <h1>{authUser.emailAddress} is authenticated!</h1>
        <p>Your username is {authUser.firstName}.</p>
        <Redirect to='/' />
      </div>
    </div>
  );
};
