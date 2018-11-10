import React, {Component} from 'react';

import LoginSection from './LoginSection';
import AdminSection from './AdminSection';
import FacultySection from './FacultySection';
import StudentSection from './StudentSection';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let section;
    const logoutButton = <button onClick={this.props.handleLogout}>Log Out</button>
    if (this.props.logInfo.isLoggedIn) {
      switch (this.props.logInfo.loggedInAs) {
        case "STUDENT":
          section = <StudentSection />
          break;
        case "FACULTY":
          section = <FacultySection />
          break;
        case "ADMIN":
          section = <AdminSection />
          break;
        default:
      }
    }
    return(
      <div>
        {section ? section : <LoginSection handleLogin={this.props.handleLogin}/> }
        {this.props.logInfo.isLoggedIn && logoutButton}
      </div>
    );
  }
}

export default Section;
