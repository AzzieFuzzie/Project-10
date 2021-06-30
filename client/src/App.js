import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then((res) => setCourses(res.courses))
      .catch((error) => console.log('Error fetching and parsing data', error));
  }, []);

  return (
    <div>
      List of courses goes here.
      <ul>
        {courses.map((course) => (
          <li key={course.id}>`${course.title}`</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
