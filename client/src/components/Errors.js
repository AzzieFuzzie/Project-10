import React from 'react';

function CourseErrors({ errors }) {
  let errorsCourse = null;

  if (errors.length) {
    errorsCourse = (
      <div>
        <h3 className='validation--errors'>Validation errors</h3>
        <ul>
          <li className='validation--errors'>
            Please provide a value for "Title"
          </li>
          <li className='validation--errors'>
            Please provide a value for "Description"
          </li>
          {errors.map((error, i) => (
            <li className='validation--errors' key={i}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return errorsCourse;
}

export default CourseErrors;
