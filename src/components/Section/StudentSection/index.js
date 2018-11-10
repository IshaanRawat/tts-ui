import React from 'react';
import {Link} from 'react-router-dom';

const studentSection = (props) => {
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Student Section</h1>
    </section>
  );
};

export default studentSection;
