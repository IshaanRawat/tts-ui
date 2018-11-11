import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import TimeTable from './../../../UI/TimeTable';

const studentSection = (props) => {
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
        <label for="roll">Enter your Roll number</label>
        <input name="roll" type="text" placeholder="Roll Number" />
        <input type="submit" className="button green" value="View" />
      </form>
    );
  }
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Student Section</h1>
      {result}
    </section>
  );
};

export default studentSection;
