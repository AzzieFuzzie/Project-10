// import React, { useState, useContext, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import Form from './Form';
// import Errors from './Errors';
// import { Context } from '../context';

// const DeleteCourse = () => {
//   const [courseDelete, setCourseDelete] = useState([]);
//   const { id } = useParams();
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/courses/${id}`)
//       .then((res) => res.json())
//       .then((data) => setCourseDelete(data[0]))
//       .catch((error) =>
//         console.log('Error fetching and parsing courseUpdate', error)
//       );
//   }, []);

//   const context = useContext(Context);
//   const authUser = context.authenticatedUser;
//   const history = useHistory();
//   const [errors, setErrors] = useState([]);
//   const submit = () => {
//     context.data
//       .deleteCourse(id, authUser.emailAddress, authUser.password)
//       .then((errors) => {
//         if (errors.length) {
//           this.setState({ errors });
//           return <Errors />;
//         } else {
//           history.push('/courses/delete/:id');
//           console.log('Course successfully deleted');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         history.push('/error');
//       });
//   };

//   const cancel = () => {
//     history.push('/');
//   };

//   return (
//     <Form
//       cancel={cancel}
//       submit={submit}
//       errors={errors}
//       submitButtonText='Delete course'
//       elements={() => <React.Fragment></React.Fragment>}
//     />
//   );
// };

// export default DeleteCourse;
