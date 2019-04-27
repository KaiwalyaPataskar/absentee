import React from 'react';
import UpdateSchool from '../../components/class/updateClass';


class UpdateClassContainer extends React.Component {
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
      <UpdateSchool
        onClassSelect={this.onClassSelect}
        division={this.state.division}
        class={this.state.class}
        isEnable={(this.state.division && this.state.class)}
      />
    );

  }
}
export default UpdateClassContainer;