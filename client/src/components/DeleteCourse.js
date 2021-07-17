import React, { Component } from 'react';
import Errors from './Errors';

class DeleteCourse extends Component {
  state = {
    title: '',
    description: '',
    materialsNeeded: '',
    estimatedTime: '',
    errors: [],
  };

  render() {
    return (
      <button className='button' onClick={this.submit}>
        Delete course
      </button>
    );
  }

  // Retrieves single course
  retrieveCourse = () => {
    const { context } = this.props;
    const id = this.props.match.params.id;

    context.data
      .getOneCourse(id)
      .then((data) => {
        this.setState({
          title: data.title,
          description: data.description,
          materialsNeeded: data.materialsNeeded,
          estimatedTime: data.estimatedTime,
        });
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/error');
      });
  };

  submit = () => {
    const { context } = this.props;
    const authUser = this.props.authenticatedUser;

    const { title, description, materialsNeeded, estimatedTime } = this.state;

    // delete course
    const deleteCourse = {
      title,
      description,
      materialsNeeded,
      estimatedTime,
    };

    context.data
      .deleteCourse(deleteCourse, authUser.emailAddress, authUser.password)
      .then((errors) => {
        if (errors.length) {
          this.setState({ errors });
          return <Errors />;
        } else {
          this.props.history.push('/courses/delete/:id');
        }
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push('/error');
      });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.submit();
  }
}

export default DeleteCourse;
