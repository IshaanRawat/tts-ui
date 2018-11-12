import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import TimeTable from '../../../UI/TimeTable';

const adminLoginSection = (props) => {
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Admin Login</h1>
      <form>
        <label for="password">Enter the password</label>
        <input name="password" type="password" placeholder="Password" />
        <input type="submit" className="button green" value="Login" />
      </form>
    </section>
  );
};

export default adminLoginSection;
