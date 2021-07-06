import React from 'react';
import { Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default ({ context }) => {
  context.actions.signOut();

  return <Redirect to='/' />;
};
