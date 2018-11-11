import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import TimeTable from './../../../UI/TimeTable';

const facultySection = (props) => {
  let result;
  const data = [
    {
      name: "Monday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1"
        },
        {
          time: "9:30 - 10:30",
          name: "M1"
        },{
          time: "9:30 - 10:30",
          name: "M1"
        }
      ]
    },
    {
      name: "Tuesday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1"
        },
        {
          time: "9:30 - 10:30",
          name: "M1"
        },{
          time: "9:30 - 10:30",
          name: "M1"
        }
      ]
    },
    {
      name: "Wednesday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1"
        },
        {
          time: "9:30 - 10:30",
          name: "M1"
        },{
          time: "9:30 - 10:30",
          name: "M1"
        }
      ]
    },
    {
      name: "Thursday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1"
        },
        {
          time: "9:30 - 10:30",
          name: "M1"
        },{
          time: "9:30 - 10:30",
          name: "M1"
        }
      ]
    }
    ,{
      name: "Friday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1"
        },
        {
          time: "9:30 - 10:30",
          name: "M1"
        },{
          time: "9:30 - 10:30",
          name: "M1"
        }
      ]
    }
  ];
  if(props.match.params.id) {
    result = (
      <Fragment>
        <h2>Time Table</h2>
        <TimeTable data={data}/>
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
