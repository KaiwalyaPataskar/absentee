import React, { Component } from 'react';
import UpdateStudent from '../../components/student/updateStudent';
// import { addUpdateProductInitiate } from '../../actions/admin/addNewProduct';

class UpdateStudentContainer extends Component {
  updateStudent = () => {
    this.props.addUpdateProductInitiate(this.state.fields);
  }
  render() {
    return (
      <UpdateStudent
        handleSubmit={this.updateStudent}
      />
    );
  }
}
// const mapStateToProps = (state) => ({
//   addUpdateProduct: state.addUpdateProduct,
// })
// const mapDispatchToProps = (dispatch) => ({
//   addUpdateProductInitiate: (update) => dispatch(addUpdateProductInitiate(update)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudentContainer)
export default UpdateStudentContainer