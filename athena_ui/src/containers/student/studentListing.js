import React from 'react';
import StudentListing from '../../components/student/studentListitng';
import Request from '../../utils/request-provider'


class StudentListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentListing: [],
      isSearch: false
    }
  }

  componentDidMount = () => {
    this.getStudents();
  }


  editStudent = (student) => {
    this.props.history.push({
      pathname:'/updateStudent',
      state: { student }
    })
  }

  getStudents = () => {
    Request.fetch('https://thawing-tor-17765.herokuapp.com/v1/schools/1/users').then(response => {
      this.setState({
        studentListing: response.value
      })
    })
  }

  render() {
    return (
      <StudentListing
        studentListing={this.state.studentListing}
        editStudent={this.editStudent}
      />
    );

  }
}
export default StudentListingContainer;