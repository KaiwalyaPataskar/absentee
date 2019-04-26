import React from 'react';
import Request from '../utils/request-provider';
import AbsenteeForm from '../components/absentee-form';

const classes = [
  {'label': '1st', 'value': '1'},
  {'label': '2nd', 'value': '2'}
]

const divisions = [
  {label: 'A', value: 'A'},
  {label: 'B', value: 'B'}
]

const students =[
  {label: 'Mayuri', value: '1234'},
  {label: 'Swapnil', value: '1243'},
  {label: 'Smriti', value: '2134'},
  {label: 'Kaiwalya', value: '3453'},
  {label: 'Ninad', value: '6533'},
]

class Absentee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      division: '',
      class: '',
      absentStudents: [],
      isSearch: false
    }
  }
  onDivisionSelect = (event) => {
    this.setState({
      division: event.value
    })
    // Request.fetch().then((response) => {
    //   debugger
    // })
  }

  onClassSelect = (event) => {
    this.setState({
      class: event.value
    })
  }
  // uploadFile = (e) =>{
  //   this.setState({
  //     file: e.target.files[0]
  //   })
  // }
  render() {
    return (
      <AbsenteeForm
        classOptions={classes}
        divisionOptions={divisions}
        studentOptions={students}
        onDivisionSelect={this.onDivisionSelect}
        onClassSelect={this.onClassSelect}
        division={this.state.division}
        class={this.state.class}
        isEnable={(this.state.division && this.state.class)}
      />
    );

  }
}
export default Absentee;