import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button} from 'reactstrap';


const UpdateSchool = (props) => {
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>School Crud</CardHeader>
        <CardBody>
          <Form className='userForm'>
            <FormGroup>
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
                  <Label>Address: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='address' type='textarea' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Contact Number: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='contactNumber' type='number' />
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
export default UpdateSchool
