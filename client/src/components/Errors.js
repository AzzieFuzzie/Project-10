import React, { useContext } from 'react';

const Errors = () => {
  const errors = useContext(errors);
  if (errors.length > 0) {
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
  }
};

export default Errors;
