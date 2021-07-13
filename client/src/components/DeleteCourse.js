// import React, { Component } from 'react';
// import Errors from './Errors';

// const DeleteCourse = () => {
//   submit = () => {
//     const { context } = this.props;
//     const id = use.Params;
//     context.data
//       .deleteCourse(course, signIn.emailaddress, signIn.password)
//       .then((errors) => {
//         if (errors.length) {
//           this.setState({ errors });
//           return <Errors />;
//         } else {
//           this.props.history.push('/courses/delete/:id');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         this.props.history.push('/error');
//       });
//   };

//   return (
//     <div>
//       submit={this.submit}
//       <form>
//         <button className='button' onSubmit={submit}>
//           Delete course
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DeleteCourse;
