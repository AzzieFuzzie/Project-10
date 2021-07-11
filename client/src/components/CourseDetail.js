import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = ({ context }) => {
  const authUser = context.authenticatedUser;
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
      {console.log(courseDetails)}
      <div>
        <button className='button' to='/courses/:id/update'>
          Update Course
        </button>
        <button className='button'>Delete Course</button>
        <Link className='button button-secondary' to='/'>
          Return to List
        </Link>
        <h2>Course Detail</h2>
      </div>
      <div>
        <h3 className='course--detail--title'>Course</h3>
        <h3 className='course--name'>{courseDetails.title}</h3>
        <p>By{}</p>
        <p>{courseDetails.description}</p>
        <h3 className='course--detail--title'>Estimated Time</h3>
        <p>{courseDetails.estimatedTime}</p>
        <h3 className='course--detail--title'>Materials Needed</h3>
        <ul>
          <li className='course--detail--list'>
            {courseDetails.materialsNeeded}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetail;
