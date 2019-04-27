import React from 'react';
import ClassListing from '../../components/class/classListing';

class ClassListingContainer extends React.Component {
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
      <ClassListing/>
    );

  }
}
export default ClassListingContainer;