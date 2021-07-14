import React, { Component } from 'react';
import Form from './Form';
import Errors from './Errors';

class UpdateCourse extends Component {
  state = {
    title: '',
    description: '',
    materialsNeeded: '',
    estimatedTime: '',
    errors: [],
  };

  retrieveCourse = () => {
    const context = this.props;
    const authUser = context.authenticatedUser;
    const id = this.props.match.params.id;
    console.log(context.match.params.id);

    context.data
      .getOneCourse(id, authUser.emailAddress, authUser.password)
      .then(console.log(id))
      .then((data) => {
        this.setState({
          title: data.title,
          descrition: data.description,
          materialsNeeded: data.materialsNeeded,
          estimatedTime: data.estimatedTime,
        });
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/error');
      });
  };
  render() {
    const { title, description, materialsNeeded, estimatedTime, errors } =
      this.state;

    return (
      <div>
        <h1>Update Course</h1>

        <Form
          cancel={this.cancel}
          errors={errors}
          submit={this.submit}
          submitButtonText='Update course'
          elements={() => (
            <React.Fragment>
              <label>Course Title</label>
              <input
                id='1'
                type='text'
                value={title}
                onChange={this.change}
                name='title'
              />
              <p>By {}</p>
              <label>Course Description</label>
              <input
                id='2'
                type='text'
                value={description}
                onChange={this.change}
                name='description'
              />
              <label>Estimated Time</label>
              <input
                id='3'
                type='text'
                value={estimatedTime}
                onChange={this.change}
                name='estimatedTime'
              />
              <label>Materials Needed</label>
              <input
                id='4'
                type='text'
                value={materialsNeeded}
                onChange={this.change}
                name='materialsNeeded'
              />
            </React.Fragment>
          )}
        />
      </div>
    );
  }

  // Retrieves single course

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
    const authUser = context.authenticatedUser;
    console.log(context.match.params.id);

    context.data
      .updateCourse(
        context.match.params.id,
        authUser.emailAddress,
        authUser.password
      )

      .then((errors) => {
        if (errors.length) {
          this.setState({ errors });
          return <Errors />;
        } else {
          this.props.history.push('/courses/update');
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

export default UpdateCourse;
