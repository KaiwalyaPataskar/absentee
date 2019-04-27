import React, { Component } from 'react';
import UpdateStudent from '../../components/student/updateStudent';
import Request from '../../utils/request-provider';
import _ from 'lodash';

class UpdateStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      division: '',
      class: '',
      divisionOptions: [],
      classOptions: [],
      studentInfo: {},
    }
  }


  componentDidMount = () => {
    this.getClasses();
  }

  getDivisions = () => {
    Request.fetch(`http://192.168.1.234:3000/v1/schools/1/classes/${this.state.class}/divisions`).then(response => {
      this.setState({
        divisionOptions: response.value
      })
    })
  }

  getClasses = () => {
    Request.fetch('http://192.168.1.234:3000/v1/schools/1/classes').then(response => {
      this.setState({
        classOptions: response.value
      })
    })
  }

  onDivisionSelect = (event) => {
    this.setState({
      division: event.value
    })
  }

  onClassSelect = (event) => {
    this.setState({
      class: event.value
    }, this.getDivisions)
  }

  onHandleChange = (event) => {
    const { studentInfo } = this.state;
    this.setState({
      studentInfo: _.assign({}, studentInfo, { [event.target.name]: event.target.value })
    })
  }

  saveInfo = () => {
    let { studentInfo } = this.state;
    let param = _.extend(studentInfo, {
      'class_info_id': this.state.class,
      'division_id': this.state.division
    })
    debugger
    Request.save('http://192.168.1.234:3000/v1/schools/2/users', param).then((response) => {
      this.setState({
        studentInfo: response.value
      })
    })

  }

  render() {
    return (
      <UpdateStudent
        onClassSelect={this.onClassSelect}
        onDivisionSelect={this.onDivisionSelect}
        saveInfo={this.saveInfo}
        onHandleChange={this.onHandleChange}
        classOptions={this.state.classOptions.map((term => ({ 'label': term.name, 'value': term.id })))}
        divisionOptions={this.state.divisionOptions.map((division => ({ 'label': division.name, 'value': division.id })))}
      />
    );
  }
}
export default UpdateStudentContainer