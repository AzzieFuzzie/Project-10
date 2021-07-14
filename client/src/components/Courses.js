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
        <div className=' wrap main--grid'>
          <Link
            className='course--link course--module'
            to={`/courses/${course.id}`}
            key={course.id}
          >
            <h2 className='course--label'>Course</h2>
            <h3 className='course--title'>{course.title}</h3>
          </Link>
        </div>
      ))}
      <div>
        <Link
          className='course--add--module course--module'
          to={'/courses/create'}
        >
          <span className='course--add--title'>+ New course</span>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
