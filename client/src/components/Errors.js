import React from 'react';

const Errors = () => {
  return (
    <div className='validation--errors'>
      <h3 className='validation--errors'>Validation Errors</h3>
      <ul className='validation--errors'>
        <li className='validation--errors'>
          Please provide a value for "Title"
        </li>
        <li className='validation--errors'>
          Please provide a value for "Description"
        </li>
      </ul>
    </div>
  );
};

export default Errors;
