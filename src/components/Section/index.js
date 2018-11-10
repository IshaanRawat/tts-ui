import React, {Component, Fragment} from 'react';

import LoginSection from './LoginSection';
import FacultySection from './FacultySection';
import StudentSection from './StudentSection';

class Section extends Component {

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
        default:
      }
    }
    return(
      <Fragment>
        {section ? section : <LoginSection handleLogin={this.props.handleLogin}/> }
        {this.props.logInfo.isLoggedIn && logoutButton}
      </Fragment>
    );
  }
}

export default Section;
