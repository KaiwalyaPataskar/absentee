import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Button } from 'reactstrap';
import Select from 'react-select';

const AbsenteeForm = (props) => {
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>Mark Absentee</CardHeader>
        <CardBody>
          <Form className='userForm'>
            <FormGroup>
              <Row className="mb-4">
                <Col sm='4'>
                  <Label>Class: </Label>
                </Col>
                <Col sm='8'>
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
                <Col sm='8'>
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
                  <Label>Search Students: </Label>
                </Col>
                <Col sm='8'>
                  <Select
                    name='name'
                    placeholder='Search Name'
                    isMulti
                    options={props.studentOptions || {}}
                    isDisabled={!props.isEnable}
                    onChange={props.handleChange}
                  />
                </Col>

              </Row>
              <Row>
                <Col sm='12'>
                  <Button onClick={props.markAbsent}>Mark Absent</Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default AbsenteeForm;