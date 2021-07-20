// import React, { Component } from 'react';
// import Errors from './Errors';

// class DeleteCourse extends Component {
//   state = {
//     title: '',
//     description: '',
//     materialsNeeded: '',
//     estimatedTime: '',
//     errors: [],
//     data: [],
//   };

//   componentDidMount() {
//     const { context } = this.props;

//     context.data
//       .getOneCourse(this.props.match.params.id)
//       .then((errors) => {
//         if (errors.length) {
//           this.setState({ errors });
//           console.log('error');
//           return <Errors />;
//         } else {
//           this.props.history.push('/');
//           console.log('course successfully deleted');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         this.props.history.push('/error');
//       });
//   }

//   render() {
//     return (
//       <button className='button' onClick={this.submit}>
//         Delete course
//       </button>
//     );
//   }

//   submit = () => {
//     const { context } = this.props;
//     const authUser = this.props.authenticatedUser;

//     const { title, description, materialsNeeded, estimatedTime } = this.state;

//     // delete course
//     const deleteCourse = {
//       title,
//       description,
//       materialsNeeded,
//       estimatedTime,
//     };

//     context.data
//       .deleteCourse(deleteCourse, authUser.emailAddress, authUser.password)
//       .then((errors) => {
//         if (errors.length) {
//           this.setState({ errors });
//           return <Errors />;
//         } else {
//           this.props.history.push('/courses/delete/:id');
//           console.log('Course successfully deleted');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         this.props.history.push('/error');
//       });
//   };

//   handleSubmit(event) {
//     event.preventDefault();
//     this.submit();
//   }
// }

// export default DeleteCourse;
