import React from 'react';
import { Card, CardHeader, CardBody, Button, Table } from 'reactstrap';

const Classlisting = (props) => {
  
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>Class Listing <Button href='/updateClass' className='mb-2'>Add new</Button></CardHeader>
        <CardBody>
          <Table striped hover responsive className='userForm'>
            <thead>
              <tr className="mb-4">
                <th>#</th>
                <th sm='4'>Class</th>
                <th sm='4'>Division</th>
                <th sm='4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {props.data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.registrationNo}</td>
                  <td>{item.class}</td>
                  <td>{item.action}</td>
                </tr>
              ))} */}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}
export default Classlisting
