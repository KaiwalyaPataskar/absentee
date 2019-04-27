import React from 'react';
import { Card, CardHeader, CardBody, Button, Table } from 'reactstrap';
import {Link} from 'react-router-dom';

const StudentListing = (props) => {
  
  return (
    <div>
      <Card className="mt-5 ml-5 mr-5 wrapper">
        <CardHeader>Student Listing <Button href='/updateStudent' className='mb-2'>Add new</Button></CardHeader>
        <CardBody>
          <Table striped hover responsive className='userForm'>
            <thead>
              <tr className="mb-4">
                <th>#</th>
                <th sm='4'>Registration No</th>
                <th sm='4'>Roll No.</th>
                <th sm='4'>Student Name</th>
                <th sm='4'>Emergency No.</th>
                <th sm='4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.studentListing.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.registration_number}</td>
                  <td>{item.roll_number}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile_number}</td>
                  <td><Link to={{
                        pathname: '/updateStudent',
                        state: { student: item }
                      }}> Edit </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}
export default StudentListing
