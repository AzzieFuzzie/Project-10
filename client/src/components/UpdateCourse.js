import React from 'react';

class UpdateCourse extends React.Component {
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

    context
      .createCourse(course)
      // .then((errors) => {
      //   if (errors.length) {
      //     this.setState({ errors });
      //   } else {
      //     context.actions.signIn(emailaddress, password).then(() => {
      //       this.props.history.push('/courses/update');
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
    return (
      <div>
        <h1>Update Course</h1>
        <form>
          <label>Course Title</label>
          <input type='text' value={this.state.courseTitle} />
          <p>By {}</p>
          <label>Course Description</label>
          <input type='text' value={this.state.courseDescription} />
          <label>Estimated Time</label>
          <input type='text' value={this.state.estimatedTime} />
          <label>Materials Needed</label>
          <input type='text' value={this.state.materialsNeeded} />
        </form>
      </div>
    );
  }
}

export default UpdateCourse;
