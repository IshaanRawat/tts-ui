import React, {Fragment} from 'react';
import './index.css';

const timeTable = (props) => {
  return (
    <table className="timetable">
      <tbody>
        {props.data.map((day, i) => {
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
