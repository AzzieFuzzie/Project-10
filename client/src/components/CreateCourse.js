import React, { Component } from 'react';
import Form from './Form';

class CreateCourse extends Component {
  state = {
    title: '',
    description: '',
    materialsNeeded: '',
    estimatedTime: '',
    errors: [],
  };

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };

  submit = () => {
    const { context } = this.props;
    const { title, descrition, materialsNeeded, estimatedTime, errors } =
      this.state;

    // Create course
    const course = {
      title,
      descrition,
      materialsNeeded,
      estimatedTime,
    };

    context.data
      .createCourse(course)
      // .then((errors) => {
      //   if (errors.length) {
      //     this.setState({ errors });
      //   } else {
      //     context.actions.signIn(username, password).then(() => {
      //       this.props.history.push('/authenticated');
      //     });
      //   }
      // })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/error');
      });
  };

  cancel = () => {
    this.props.history.push('/');
  };
  render() {
    const { title, description, materialsNeeded, estimatedTime, errors } =
      this.state;

    return (
      <div>
        <p>Welcome,{}</p>
        <h1>Create Course</h1>
        <div className='validation--errors'>
          <h3 className='validation--errors'>Validation Errors</h3>
          <ul className='validation--errors'>
            <li className='validation--errors'>
              Please provide a value for "Title"
            </li>
            <li className='validation--errors'>
              Please provide a value for "Description"
            </li>
          </ul>
        </div>
        <Form
          cancel={this.cancel}
          errors={errors}
          submit={this.submit}
          submitButtonText='Sign Up'
          elements={() => (
            <React.Fragment>
              <label>Course Title</label>
              <input type='text' value={title} id='1' name='title' />

              <p>By{}</p>

              <label>Course Description</label>
              <input
                type='text'
                value={description}
                id='2'
                name='description'
              />

              <label>Estimated Time</label>
              <input
                type='text'
                value={estimatedTime}
                id='3'
                name='estimatedTime'
              />

              <label>Materials Needed</label>
              <input
                type='text'
                value={materialsNeeded}
                id='4'
                name='materialsNeeded'
              />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default CreateCourse;
