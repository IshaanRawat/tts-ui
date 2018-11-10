import React from 'react';
import {Link} from 'react-router-dom';

const facultySection = (props) => {
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Faculty Section</h1>
    </section>
  );
};

export default facultySection;
