import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginSection from './LoginSection';
import FacultySection from './FacultySection';
import FacultyLoginSection from './FacultySection/login';
import StudentSection from './StudentSection';
import StudentLoginSection from './StudentSection/login';
import AdminLoginSection from './AdminSection/login';
import AdminSection from './AdminSection';
import NoMatch from '../404';

class Section extends Component {

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/" exact={true} component={LoginSection} />
          <Route path="/student/login" exact={true} component={StudentLoginSection} />
          <Route path="/student/:id" component={StudentSection} />
          <Route path="/student" component={StudentLoginSection} />
          <Route path="/faculty/login" exact={true} component={FacultyLoginSection} />
          <Route path="/faculty/:id" component={FacultySection} />
          <Route path="/faculty" component={FacultyLoginSection} />
          <Route path="/admin/login" exact={true} component={AdminLoginSection} />
          <Route path="/admin" component={AdminSection} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    );
  }
}

export default Section;
