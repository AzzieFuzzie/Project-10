import React, { Component } from 'react';
import Errors from './Errors';

class DeleteCourse extends Component {
  state = {};

  handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  render() {
    return (
      <button className='button' onSubmit={this.submit}>
        Delete course
      </button>
    );
  }

  submit = () => {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    const id = this.props.match.params.id;

    context.data
      .deleteCourse(id, authUser.emailAddress, authUser.password)
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

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value,
      };
    });
  };
}

export default DeleteCourse;
