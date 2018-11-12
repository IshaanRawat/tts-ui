import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AdminLoginSection extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
  }

  verifyPassword() {
    this.props.history.push('/admin');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.verifyPassword();
  }

  render() {
    return (
      <section>
        <h1><Link className="no-decoration" to="/"> &larr; </Link>Admin Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="password">Enter the password</label>
          <input name="password" type="password" placeholder="Password" />
          <input type="submit" className="button green" value="Login" />
        </form>
      </section>
    );
  }
}

export default AdminLoginSection;
