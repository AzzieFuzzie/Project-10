import React from 'react';

const UpdateCourse = () => {
  return (
    <div>
      <h1>Update Course</h1>
      <form>
        <label>Course Title</label>
        <input type='text' />
        <p>By {}</p>
        <label>Course Description</label>
        <input type='text' />
        <label>Estimated Time</label>
        <input type='text' />
        <label>Materials Needed</label>
        <input type='text' />
      </form>
    </div>
  );
};

export default UpdateCourse;
