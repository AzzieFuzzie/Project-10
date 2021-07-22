import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import Errors from './Errors';
import { Context } from '../context';

const UpdateCourse = () => {
  const [courseUpdate, setCourseUpdate] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourseUpdate(data[0]))
      .catch((error) =>
        console.log('Error fetching and parsing courseUpdate', error)
      );
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  const [errors, setErrors] = useState([]);

  const context = useContext(Context);
  const authUser = context.authenticatedUser;
  const history = useHistory();

  const change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    return {
      [name]: value,
    };
  };

  const submit = () => {
    // Updated course
    const updatedCourse = {
      title,
      description,
      materialsNeeded,
      estimatedTime,
    };

    context.data
      .updateCourse(updatedCourse, id, authUser.emailAddress, authUser.password)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors);
          return <Errors />;
        } else {
          history.push('/courses/update');
          console.log('Course successfully updated');
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
    <div className='wrap'>
      <h1>Update Course</h1>

      <Form
        cancel={cancel}
        submit={submit}
        errors={errors}
        submitButtonText='Update course'
        elements={() => (
          <React.Fragment>
            <div className='main--grid'>
              <div>
                <label>Course Title</label>
                <input
                  id='title'
                  type='text'
                  value={courseUpdate.title}
                  onChange={change}
                  name='title'
                />
                <p>By {}</p>
                <label>Course Description</label>
                <textarea
                  id='description'
                  type='text'
                  value={courseUpdate.description}
                  onChange={change}
                  name='description'
                ></textarea>
              </div>
              <div>
                <label>Estimated Time</label>
                <input
                  id='estimatedTime'
                  type='text'
                  value={courseUpdate.estimatedTime}
                  onChange={change}
                  name='estimatedTime'
                />
                <label>Materials Needed</label>
                <textarea
                  id='materialsNeeded'
                  type='text'
                  value={courseUpdate.materialsNeeded}
                  onChange={change}
                  name='materialsNeeded'
                ></textarea>
              </div>
            </div>
          </React.Fragment>
        )}
      />
    </div>
  );
};

export default UpdateCourse;
