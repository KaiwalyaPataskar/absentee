import React from 'react';
import { Alert, Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import { find, isEmpty } from 'lodash';

const UpdateStudent = (props) => {
  let studentClass = {};
  if(!isEmpty(props.class)){
    studentClass = props.class;
  } else {
    studentClass = props.studentInfo && find(props.classOptions, (studentClass) => (studentClass.value === props.studentInfo.class_info_id));
  }
  let studentDiv = {};
  if(!isEmpty(props.division)){
    studentDiv = props.division;
  } else {
    studentDiv = props.studentInfo && find(props.divisionOptions, (division) => (division.value === props.studentInfo.division_id));
  } 

  return (
    <div>
      {props.errorMsg && <Alert color='danger'>{props.errorMsg}</Alert>}
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>Add Student</CardHeader>
        <CardBody>
          <Form className='userForm'>
            <FormGroup>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Class: </Label>
                </Col>
                <Col sm='4'>
                  <Select
                    name='class'
                    options={props.classOptions}
                    value={studentClass}
                    placeholder='Select Class'
                    onChange={props.onClassSelect}
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Division: </Label>
                </Col>
                <Col sm='4'>
                  <Select
                    name='division'
                    options={props.divisionOptions}
                    value={studentDiv}
                    placeholder='Division'
                    onChange={props.onDivisionSelect}
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Name: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='name' type='text' value={props.studentInfo.name} onChange={props.onHandleChange} />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Registration Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='registration_number' value={props.studentInfo.registration_number} type='text' onChange={props.onHandleChange} />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Parent Mobile Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='mobile_number' value={props.studentInfo.mobile_number} type='number' onChange={props.onHandleChange} />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Roll Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='roll_number' value={props.studentInfo.roll_number} type='number' onChange={props.onHandleChange} />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Button color="success" onClick={props.saveInfo}>
                    {props.isEdit ? 'Update' : 'Submit'}
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}
export default UpdateStudent
