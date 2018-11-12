import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginSection from './LoginSection';
import FacultySection from './FacultySection';
import FacultyLoginSection from './FacultySection/login';
import StudentSection from './StudentSection';
import StudentLoginSection from './StudentSection/login';
import AdminLoginSection from './AdminSection/login';

class Section extends Component {

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/" exact={true} component={LoginSection} />
          <Route path="/student" exact={true} component={StudentLoginSection} />
          <Route path="/student/login" exact={true} component={StudentLoginSection} />
          <Route path="/student/:id" component={StudentSection} />
          <Route path="/faculty/" exact={true} component={FacultyLoginSection} />
          <Route path="/faculty/login" exact={true} component={FacultyLoginSection} />
          <Route path="/faculty/:id" component={FacultySection} />
          <Route path="/admin/login" component={AdminLoginSection} />
        </Switch>
      </Fragment>
    );
  }
}

export default Section;
