import React from 'react';

const CreateCourse = () => {
  return (
    <div>
      <h1>Courses</h1>
      <p>Welcome,${}</p>
      <h3>Create Course</h3>
      <h4>Validation Errors</h4>
      <p>Please provide a value for "Title"</p>
      <p>Please provide a value for "Description"</p>
      <Form />
    </div>
  );
};

export default CreateCourse;
