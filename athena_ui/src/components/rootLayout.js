import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UpdateStudentContainer from '../containers/student/updateStudent';
import AbsenteeForm from '../containers/absentee-container';
import UpdateSchoolContainer from '../containers/school/updateSchool';
import UpdateClassContainer from '../containers/class/updateClass';
import StudentListingContainer from '../containers/student/studentListing';
import ClassListingContainer from '../containers/class/classListing';

class RootLayout extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AbsenteeForm} />
        <Route path='/updateStudent' component={UpdateStudentContainer} />
        <Route path='/updateSchool' component={UpdateSchoolContainer} />
        <Route path='/updateClass' component={UpdateClassContainer} />
        <Route path='/studentListing' component={StudentListingContainer} />
        <Route path='/classListing' component={ClassListingContainer} />
      </Switch>
    );
  }
}
export default RootLayout;