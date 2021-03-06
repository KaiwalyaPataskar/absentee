import React from 'react';
import AbsenteeForm from '../components/absentee-form';
import Request from '../utils/request-provider';
import {Alert} from 'reactstrap';

class Absentee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      division: '',
      class: '',
      classOptions: [],
      divisionOptions: [],
      absentStudents: [],
      isSearch: false,
      students: [],
      msgsSent: false
    }
  }

  handleChange = (value) => {
    this.setState({ absentStudents: value });
  }

  componentDidMount() {
    this.getClasses();
  }

  getDivisions = () => {
    Request.fetch(`https://thawing-tor-17765.herokuapp.com/v1/schools/1/classes/${this.state.class}/divisions`).then(response => {
      this.setState({
        divisionOptions: response.value
      })
    })
  }

  getClasses = () => {
    Request.fetch('https://thawing-tor-17765.herokuapp.com/v1/schools/1/classes').then(response => {
      this.setState({
        classOptions: response.value
      })
    })
  }

  onDivisionSelect = (event) => {
    this.setState({
      division: event.value
    }, this.getStudents)
  }

  onClassSelect = (event) => {
    this.setState({
      class: event.value
    }, this.getDivisions)
  }

  markAbsent = () => {
    let absentRollNos = this.state.absentStudents.map((no) => (no.value));
    Request.save('https://thawing-tor-17765.herokuapp.com/v1/student_attendace',{
      'present': false,
      'user_ids': absentRollNos
    }).then((response) => {
      if(response.status === 'ok'){
        this.setState({
          msgsSent: true
        }, () => {
          setTimeout(() => {
            this.setState({
              msgsSent: false
            })
          }, 3000)
        })
      }
    })
  }
  getStudents = () => {
    Request.save('https://thawing-tor-17765.herokuapp.com/v1/schools/1/get_students', {
      "class_id": this.state.class,
      'division_id': this.state.division
    }).then((response) => {
      this.setState({
        students: response.value
      })
    })
  }

  render() {
    return (
      <>
      {this.state.msgsSent && <Alert color="primary">
        Attendance has been marked..
      </Alert>}
      <AbsenteeForm
        classOptions={this.state.classOptions.map((term => ({ 'label': term.name, 'value': term.id })))}
        divisionOptions={this.state.divisionOptions.map((division => ({ 'label': division.name, 'value': division.id })))}
        studentOptions={this.state.students && this.state.students.map((student) => ({ 'label': student.name, 'value': student.id }))}
        onDivisionSelect={this.onDivisionSelect}
        onClassSelect={this.onClassSelect}
        division={this.state.division}
        class={this.state.class}
        isEnable={(this.state.division && this.state.class)}
        handleChange={this.handleChange}
        markAbsent={this.markAbsent}
      />
      </>
    );

  }
}
export default Absentee;