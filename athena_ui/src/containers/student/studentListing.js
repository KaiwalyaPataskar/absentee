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



  getStudents = () => {
    Request.fetch('http://192.168.1.234:3000/v1/schools/2/users').then(response => {
      this.setState({
        studentListing: response.value
      })
    })
  }

  render() {
    return (
      <StudentListing
        studentListing={this.state.studentListing}
      />
    );

  }
}
export default StudentListingContainer;