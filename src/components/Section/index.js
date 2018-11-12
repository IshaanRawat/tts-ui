import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginSection from './LoginSection';
import FacultySection from './FacultySection';
import StudentSection from './StudentSection';
import AdminLoginSection from './AdminSection/login';

class Section extends Component {

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/" exact={true} component={LoginSection} />
          <Route path="/student/:id" component={StudentSection} />
          <Route path="/student" component={StudentSection} />
          <Route path="/faculty/:id" component={FacultySection} />
          <Route path="/faculty" component={FacultySection} />
          <Route path="/admin/login" component={AdminLoginSection} />
        </Switch>
      </Fragment>
    );
  }
}

export default Section;
