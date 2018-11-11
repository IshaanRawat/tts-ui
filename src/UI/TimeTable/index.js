import React, {Fragment} from 'react';
import './index.css';

const timeTable = () => {
  const data = {
      data: [
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
      ]
  };

  return (
    <table className="timetable">
      <tbody>
        {data.data.map((day, i) => {
          return (
            <Fragment key={i}>
            <tr className="day">
              <td colSpan="2">{day.name}</td>
            </tr>
            {day.events.map((course, i) => {
              return (
                <tr className="course" key={i}>
                  <td>{course.time}</td>
                  <td>{course.name}</td>
                </tr>
              )
            })}
            </Fragment>
          )
        })}
      </tbody>
    </table>
  );
}

export default timeTable;
