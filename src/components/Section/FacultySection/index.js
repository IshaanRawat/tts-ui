import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import TimeTable from './../../../UI/TimeTable';

class FacultySection extends Component {
  state = {
    roll: ""
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({roll: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/faculty/'+this.state.roll);
  }

  render() {
    console.log(this.props.match.params.id);
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
    if(this.props.match.params.id) {
      result = (
        <Fragment>
          <h2>Time Table</h2>
          <TimeTable data={data}/>
        </Fragment>
      );
    } else {
      result = (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="roll">Enter your Faculty ID</label>
          <input name="roll" 
            value={this.state.roll} 
            type="text" 
            placeholder="Faculty ID" 
            onChange={this.handleChange} />
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
  }
};

export default FacultySection;
