import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteCourse from './DeleteCourse';

const CourseDetail = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data))
      .catch((error) =>
        console.log('Error fetching and parsing courseDetails', error)
      );
  }, []);

  return (
    <div>
      {console.log(courseDetails)}
      <div className='actions--bar '>
        <Link className='button' to={`/courses/${courseDetails.id}/update`}>
          Update Course
        </Link>
        {/* Delete button */}
        <DeleteCourse />
        <Link className='button button-secondary' to='/'>
          Return to List
        </Link>
      </div>
      <div className=' main--flex wrap'>
        <div>
          <h2>Course Detail</h2>
          <h3 className='course--detail--title'>Course</h3>
          <h3 className='course--name'>{courseDetails.title}</h3>
          <p>By{}</p>
          <p>{courseDetails.description}</p>
        </div>
        <div>
          <h3 className='course--detail--title'>Estimated Time</h3>
          {courseDetails.estimatedTime ? (
            <p>{courseDetails.estimatedTime}</p>
          ) : (
            <p>N/A</p>
          )}
          <h3 className='course--detail--title'>Materials Needed</h3>
          <ul>
            {courseDetails.materialsNeeded ? (
              <li>{courseDetails.materialsNeeded}</li>
            ) : (
              <p>*No materials needed.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
