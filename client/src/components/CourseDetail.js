import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data))
      .catch((error) => console.log('Error fetching and parsing data', error));
  }, []);

  return (
    <div>
      <div>
        <h1>Courses</h1>
        <Link to='/courses/:id/update'>Update Course</Link>
        <Link>Delete Course</Link>
        <Link to='/'>Return to List</Link>
        <h2>Course Detail</h2>
      </div>
      {courseDetails.map((course) => (
        <div>
          <h3>Course</h3>
          <h3>{course.title}</h3>
          <p>By{}</p>
          <p>{course.description}</p>
          <h3>Estimated Time</h3>
          <p>{course.estimatedTime}</p>
          <h3>Materials Needed</h3>
          <ul>
            <li>{course.materialsNeeded}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
