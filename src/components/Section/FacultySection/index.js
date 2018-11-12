import React from 'react';
import {Link} from 'react-router-dom';
import TimeTable from './../../../UI/TimeTable';

const facultySection = () => {
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
  
  return (
    <section>
      <h1><Link className="no-decoration" to="/"> &larr; </Link>Faculty Section</h1>
      <h2>Time Table</h2>
      <TimeTable data={data}/>
    </section>
  );
};

export default facultySection;
