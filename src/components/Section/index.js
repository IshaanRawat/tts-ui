import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginSection from './LoginSection';
import FacultySection from './FacultySection';
import StudentSection from './StudentSection';

class Section extends Component {

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/" exact={true} component={LoginSection} />
          <Route path="/student" component={StudentSection} />
          <Route path="/faculty" component={FacultySection} />
        </Switch>
      </Fragment>
    );
  }
}

export default Section;
