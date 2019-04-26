import React from 'react';
import Request from '../utils/request-provider';
import {
  Form, Label, FormGroup, Input, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader, Button
} from 'reactstrap';

class AbsenteeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {}
    }
  }
  onButtonClick = () => {
    Request.fetch().then((response) => {
      debugger
    })
  }

  uploadFile = (e) =>{
    this.setState({
      file: e.target.files[0]
    })
  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader>User Registration</CardHeader>
          <CardBody>
            <Form className='userForm'>
              <FormGroup>
                <Row className="mb-4">
                  <Col sm='4'>
                    <Label>Name: </Label>
                  </Col>
                  <Col sm='8'>
                    <Input
                      name='name'
                      value=''
                      placeholder='Name'
                    />
                  </Col>

                </Row>
                <Row className="mb-4">
                  <Col sm='4'>
                    <Label>Class: </Label>
                  </Col>
                  <Col sm='8'>
                    <Input
                      name='class'
                      value=''
                      placeholder='Class'
                    />
                  </Col>

                </Row>
                <Row className="mb-4">
                  <Col sm='4'>
                    <Label>Name: </Label>
                  </Col>
                  <Col sm='8'>
                    <Input
                      name='name'
                      value=''
                      placeholder='Name'
                    />
                  </Col>

                </Row>
                <Row>
                  <Col sm='4'>
                    <Label>Name: </Label>
                  </Col>
                  <Col sm='8'>
                    <Input type="file" name="file" id="exampleFile" 
                  onInput={(e) => {
                    this.uploadFile(e)
                    }}/>
                  </Col>

                </Row>
              </FormGroup>
            </Form>
            {/* <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
            <Button
            onClick={this.onButtonClick}>Button</Button>
          </CardBody>
        </Card>
      </div>
    );

  }
}
export default AbsenteeForm;