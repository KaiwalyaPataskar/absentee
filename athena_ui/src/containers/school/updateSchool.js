import React from 'react';
import UpdateSchool from '../../components/school/UpdateSchool';

class UpdateSchoolContainer extends React.Component {
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
  // uploadFile = (e) =>{
  //   this.setState({
  //     file: e.target.files[0]
  //   })
  // }
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
export default UpdateSchoolContainer;