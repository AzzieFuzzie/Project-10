import React, { Component } from 'react';
import Form from './Form';
import Errors from './errors';
import Context from '../context';

// data
const context = Context;
const signIn = context.authenticatedUser;
console.log(signIn);

class CreateCourse extends Component {
  state = {
    title: '',
    description: '',
    materialsNeeded: '',
    estimatedTime: '',
    errors: [],
  };

  render() {
    const { title, description, materialsNeeded, estimatedTime, errors } =
      this.state;

    return (
      <div>
        <h1>Create Course</h1>

        <Form
          cancel={this.cancel}
          errors={errors}
          submit={this.submit}
          submitButtonText='Create course'
          elements={() => (
            <React.Fragment>
              <label>Course Title</label>
              <input
                type='text'
                value={title}
                id='1'
                name='title'
                onChange={this.change}
              />

              <p>By{}</p>

              <label>Course Description</label>
              <input
                type='text'
                value={description}
                id='2'
                name='description'
                onChange={this.change}
              />

              <label>Estimated Time</label>
              <input
                type='text'
                value={estimatedTime}
                id='3'
                name='estimatedTime'
                onChange={this.change}
              />

              <label>Materials Needed</label>
              <input
                type='text'
                value={materialsNeeded}
                id='4'
                name='materialsNeeded'
                onChange={this.change}
              />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
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
    const { title, descrition, materialsNeeded, estimatedTime } = this.state;

    // Create course
    const course = {
      title,
      descrition,
      materialsNeeded,
      estimatedTime,
    };

    context.data
      .createCourse(course, signIn.emailaddress, signIn.password)
      .then((errors) => {
        if (errors.length) {
          this.setState({ errors });
          return <Errors />;
        } else {
          this.props.history.push('/courses/create');
        }
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/error');
      });
  };

  cancel = () => {
    this.props.history.push('/');
  };
}

export default CreateCourse;
