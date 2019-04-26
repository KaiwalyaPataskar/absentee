import React from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Input, Label, Button } from 'reactstrap';

const Inventory = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} className={'modal-primary'}>
      <ModalHeader>Return GRN </ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">DC Number:</Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="file"
            />
            {/* {error && <FormFeedback className="help-block">{error}</FormFeedback>} */}
          </Col>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.returnGRN}>Return</Button>
        <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )

}
export default Inventory;

