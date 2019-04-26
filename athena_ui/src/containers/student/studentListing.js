import React from 'react';
import StudentListing from '../../components/student/studentListitng';

class StudentListingContainer extends React.Component {
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
  }

  onClassSelect = (event) => {
    this.setState({
      class: event.value
    })
  }
  render() {
    return (
      <StudentListing/>
    );

  }
}
export default StudentListingContainer;