import React, { useState, useEffect } from 'react';
import Data from '../Data';
import '../styles/global.css';
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
        <div>
          <h3>Course</h3>
          <Link key={course.id}>{course.title}</Link>
        </div>
      ))}
      <div>
        <Link to='/courses/create'>+ New Course</Link>
      </div>
    </div>
  );
};

export default Courses;
