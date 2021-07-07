import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='wrap header--flex'>
        <h1 className='header--logo'>Courses</h1>

        <nav>
          <ul>
            <li className='header--signedin'>
              {' '}
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li className='.header--signedout '>
              {' '}
              <Link to='/signin'>Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
