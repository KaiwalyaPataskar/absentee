import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button} from 'reactstrap';


const UpdateClass = (props) => {
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>School Crud</CardHeader>
        <CardBody>
          <Form className='userForm'>
            <FormGroup>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Class Name: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='class' type='text' />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Division Name: </Label>
                </Col>
                <Col sm='4'>
                  <Input name='class' type='text' />
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
export default UpdateClass
