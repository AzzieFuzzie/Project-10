import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then((data) => data.json())
      .then((res) => setCourses(res))
      .catch((error) => console.log('Error fetching and parsing data', error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div className='course--module'>
          <h3>Course</h3>
          <Link
            className='course--title'
            to=' /courses/${course.id}'
            key={course.id}
          >
            {course.title}
          </Link>
        </div>
      ))}
      <div>
        <Link
          className='course--add--module course--add--title add'
          to='/courses/create'
        >
          + New Course
        </Link>
      </div>
    </div>
  );
};

export default Courses;
