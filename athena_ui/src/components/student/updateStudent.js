import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button} from 'reactstrap';
import Select from 'react-select';


const UpdateStudent = (props) => {
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>Student Crud</CardHeader>
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
                    placeholder='Division'
                    onChange={props.onDivisionSelect}
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>User Type: </Label>
                </Col>
                <Col sm='4'>
                  <Select
                    name='userType'
                    options={props.userTypeOptions}
                    placeholder='User Type'
                    onChange={props.onUserTypeSelect}
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Name: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='name' type='text' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Registration Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='regNo' type='text' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Parent Mobile Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='parentMobile' type='number' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Roll Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='rollNumber' type='number' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Button color="success">Submit</Button>
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
