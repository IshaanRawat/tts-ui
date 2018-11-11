import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import TimeTable from './../../../UI/TimeTable';

const facultySection = (props) => {
  let result;
  if(props.match.params.id) {
    result = (
      <Fragment>
        <h2>Time Table</h2>
        <TimeTable />
      </Fragment>
    );
  } else {
    result = (
      <form>
        <label for="roll">Enter your Faculty ID</label>
        <input name="roll" type="text" placeholder="Faculty ID" />
        <input type="submit" className="button green" value="View" />
      </form>
    );
  }
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Faculty Section</h1>
      {result}
    </section>
  );
};

export default facultySection;
