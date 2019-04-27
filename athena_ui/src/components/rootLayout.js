import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UpdateStudentContainer from '../containers/student/updateStudent';
import AbsenteeForm from '../containers/absentee-container'

class RootLayout extends Component {
  render(){
    return(
      <Switch>
         <Route exact path="/" component={AbsenteeForm} />
        <Route path ='/updateStudent' component={UpdateStudentContainer}/>
      </Switch>
    );
  }
}
export default RootLayout;