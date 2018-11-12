import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const loginSection = () => {
  return(
    <Fragment>
      <section id="login-section">
        <div className="section-heading">You are a</div>
        <div className="chain">
          <Link className="six pockets button blue" to="/faculty/login">Faculty</Link>
          <Link className="six pockets button green" to="/student/login">Student</Link>
        </div>
      </section>
      <section id="login-section">
        <div className="section-heading">Admin Login Portal</div>
        <div className="text-center">
          <Link className="button red" to="/admin/login">Admin Login</Link>
        </div>
      </section>
    </Fragment>
  );
};

export default loginSection;
