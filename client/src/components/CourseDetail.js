import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { Context } from '../context';

const CourseDetail = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data[0]))
      .then((data) => console.log(courseDetails))
      .catch((error) =>
        console.log('Error fetching and parsing courseDetails', error)
      );
  }, []);

  const context = useContext(Context);
  const authUser = context.authenticatedUser;
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    context.data
      .deleteCourse(id, authUser.emailAddress, authUser.password)
      .then((errors) => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          history.push('/');
          console.log('Course successfully deleted');
        }
      })
      .catch((err) => {
        console.log(err);
        history.push('/error');
      });
  };

  const cancel = () => {
    history.push('/');
  };
  return (
    <div>
      {console.log(courseDetails)}
      <div className='actions--bar '>
        <Link className='button' to={`/courses/${courseDetails.id}/update`}>
          Update Course
        </Link>

        <form onSubmit={submit}>
          <button className='button' type='submit'>
            Delete Course
          </button>
        </form>

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
            {courseDetails.materialsNeeded || /(␣)/ ? (
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
