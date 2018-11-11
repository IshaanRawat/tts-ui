import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import TimeTable from './../../../UI/TimeTable';

const studentSection = (props) => {
  let result;
  const data = [
    {
      name: "Monday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },{
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        }
      ]
    },
    {
      name: "Tuesday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },{
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        }
      ]
    },
    {
      name: "Wednesday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },{
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        }
      ]
    },
    {
      name: "Thursday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },{
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        }
      ]
    }
    ,{
      name: "Friday",
      events: [
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },
        {
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
        },{
          time: "9:30 - 10:30",
          name: "M1",
          instructor: "Abc Defghi"
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
