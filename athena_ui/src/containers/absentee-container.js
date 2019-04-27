import React from 'react';
import AbsenteeForm from '../components/absentee-form';
import _ from 'lodash';
import Request from '../utils/request-provider';
import {Alert} from 'reactstrap';

const classes = [
  { 'label': '1st', 'value': '1' },
  { 'label': '2nd', 'value': '2' }
]

const divisions = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' }
]

const students = [
  { label: 'Mayuri', value: '1234' },
  { label: 'Swapnil', value: '1243' },
  { label: 'Smriti', value: '2134' },
  { label: 'Kaiwalya', value: '3453' },
  { label: 'Ninad', value: '6533' },
]

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
      absentStudents: [],
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
    }, this.getStudents)
  }

  onClassSelect = (event) => {
    this.setState({
      class: event.value
    }, this.getDivisions)
  }

  markAbsent = () => {
    let absentRollNos = this.state.absentStudents.map((no) => (no.value));
    Request.save('http://192.168.1.234:3000/v1/student_attendance',{
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
    Request.save('http://192.168.1.234:3000/v1/schools/2/get_students', {
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