import React from 'react';
import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then((data) => console.log(data))
      .then((res) => setCourses(res.courses))
      .catch((error) => console.log('Error fetching and parsing data', error));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>`${course.title}`</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Courses;
