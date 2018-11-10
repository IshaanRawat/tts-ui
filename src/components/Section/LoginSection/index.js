import React from 'react';
import {Link} from 'react-router-dom';

const loginSection = () => {
  return(
    <section id="login-section">
      <div className="section-heading">You are a</div>
      <div className="chain">
        <Link className="six pockets button blue" to="/faculty">Faculty</Link>
        <Link className="six pockets button green" to="/student">Student</Link>
      </div>
    </section>

  );
};

export default loginSection;
