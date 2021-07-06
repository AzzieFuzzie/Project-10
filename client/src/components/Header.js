import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1>Course</h1>

      <nav>
        <React.Fragment>
          <Link to='/signup' className='signup'>
            Sign Up
          </Link>
          <Link to='/signin' className='signin'>
            Sign In
          </Link>
        </React.Fragment>
      </nav>
    </div>
  );
};

export default Header;
