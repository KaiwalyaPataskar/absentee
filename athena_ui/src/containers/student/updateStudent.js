import React, { Component } from 'react';
import UpdateStudent from '../../components/student/updateStudent';
import Request from '../../utils/request-provider';
import _, { find } from 'lodash';

class UpdateStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      division: '',
      class: '',
      divisionOptions: [],
      classOptions: [],
      studentInfo: {},
      studentEditInfo: {},
      isEdit: false,
      isError: false,
      errorMsg: ''
    }
  }


  componentDidMount = () => {
    if (this.props.location && this.props.location.state) {
      this.setState({
        studentInfo: this.props.location.state.student,
        isEdit: true
      })
      this.getDivisions(this.props.location.state.student.class_info_id);
    }
    this.getClasses();
  }

  getDivisions = (id ='') => {
    let classId = id || this.state.class.value
    Request.fetch(`https://upasthit.herokuapp.com/v1/schools/2/classes/${classId}/divisions`).then(response => {
      this.setState({
        divisionOptions: response.value
      })
    })
  }

  getClasses = () => {
    Request.fetch('https://upasthit.herokuapp.com/v1/schools/1/classes').then(response => {
      this.setState({
        classOptions: response.value
      })
    })
  }

  onDivisionSelect = (event) => {
    this.setState({
      division: event
    })
  }

  onClassSelect = (event) => {
    this.setState({
      class: event
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
      'class_info_id': studentInfo.class_info_id || this.state.class.value,
      'division_id': studentInfo.division_id && this.state.division.value,
      'user_type': 'student'
    });
    let url = 'https://upasthit.herokuapp.com/v1/schools/2/users';
    if (this.state.isEdit) {
      Request.update(`${url}/${studentInfo.id}`, param).then((response) => {
        if(response.status !== 'updated'){
          this.setState({
            errorMsg: response.value.message
          }, () => {
            setTimeout(() => {
              this.setState({
                errorMsg: false
              })
            }, 3000)
          })
        } else {
          this.props.history.push('/students');
        }
      })
    } else {
      Request.save(url, param).then((response) => {
        if(response.status !== 'created'){
          this.setState({
            errorMsg: response.value.message
          }, () => {
            setTimeout(() => {
              this.setState({
                errorMsg: false
              })
            }, 3000)
          })
        } else {
          this.props.history.push('/students');
        }
      })
    }
  }

  render() {
    return (
      <UpdateStudent
        onClassSelect={this.onClassSelect}
        onDivisionSelect={this.onDivisionSelect}
        saveInfo={this.saveInfo}
        onHandleChange={this.onHandleChange}
        studentInfo={this.state.studentInfo}
        isEdit={this.state.isEdit}
        classOptions={this.state.classOptions && this.state.classOptions.map((term => ({ 'label': term.name, 'value': term.id })))}
        divisionOptions={this.state.divisionOptions && this.state.divisionOptions.map((division => ({ 'label': division.name, 'value': division.id })))}
        division={this.state.division}
        state={this.state.class}
        errorMsg={this.state.errorMsg}
      />
    );
  }
}
export default UpdateStudentContainer