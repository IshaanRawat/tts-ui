import React from 'react';
import {Link} from 'react-router-dom';

const adminSection = () => {
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Admin Section</h1>
      <h2>Autogenerate Time Table</h2>
      <div className="text-center">
        <button className="button green">Generate Time Table</button>
      </div>
    </section>
  );
};

export default adminSection;
