import React, { Component } from 'react';
import { Label, Input, Col, FormGroup, Form, Row} from 'reactstrap'

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
      
      },
      errors: {
      
      },
      statusCode: "",
    }
  };

  // onHandleChangeFields = (e) => {
  //   let field = this.state.fields;
  //   field[e.target.name] = e.target.value;
  //   this.setState({
  //     field
  //   });
  // }

  // onBlurProdName = (e) => {
  //   let { fields } = this.state;
  //   let errors = {};

  //   if (fields["prodName"].length < 10) {
  //     errors["prodName"] = "*Product length must be greater than 10 characters";
  //     this.setState({ errors });
  //     return false;
  //   }
   
  //   return true;
  // }

  // validateForm = () => {
  //   let { fields } = this.state;
  //   let errors = {};
  //   let formIsValid = true;

  //   //required field validation
  //   if (!fields["prodName"]) {
  //     formIsValid = false;
  //     errors["prodName"] = "*Please enter Product name.";
  //   }

  //   if (!fields["prodQuantity"]) {
  //     formIsValid = false;
  //     errors["prodQuantity"] = "*Please enter correct opening time.";
  //   }

  //   if (!fields["uploadImages"]) {
  //     formIsValid = false;
  //     errors["uploadImages"] = "*Please upload atleast one image.";
  //   }

  //   if (!fields["prodPoints"]) {
  //     formIsValid = false;
  //     errors["prodPoints"] = "*Please enter correct Points.";
  //   }
  //   this.setState({ errors });
  //   return formIsValid;
  // }

  // onHandleSubmit = () => {
  //   let isValidForm = this.validateForm();
  //   if (isValidForm) {
  //     this.props.handleSubmit(this.state);
  //   }
  // }

  render() {
    return (
      <div className="col-xs-10">
        <h4>Update Student Info</h4>
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="studentName">Name</Label>
              <Input type="text" name="name" id="name" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="mobileNumber">Mobile Number</Label>
              <Input type="text" name="mobileNumber" id="mobileNumber" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        </Form>
      </div>
    );
  }
}
export default UpdateStudent
