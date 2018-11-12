import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FacultyLoginSection extends Component {
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
    return (
      <section>
        <h1><Link className="no-decoration" to="/"> &larr; </Link>Faculty Section</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="roll">Enter your Faculty ID</label>
          <input name="roll" 
            value={this.state.roll} 
            type="text" 
            placeholder="Faculty ID" 
            onChange={this.handleChange} />
          <input type="submit" className="button green" value="View" />
        </form>
      </section>
    );
  }
};

export default FacultyLoginSection;
