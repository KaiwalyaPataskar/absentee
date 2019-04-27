import React from 'react';
import {  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader, Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Input, Label, Button } from 'reactstrap';

const InventoryModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} className={'modal-primary'}>
      <ModalHeader>Upload Files </ModalHeader>
      <ModalBody>
        {/* <Form multipart> */}
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="text-input">Student Information</Label>
          </Col>
          <Col xs="12" md="9">
            <Input
              type="file"
              onChange={props.onFileChange}
            />
          </Col>
        </FormGroup>
        {/* </Form> */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.uploadFile}>Upload</Button>
        <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )

}
export default InventoryModal;

