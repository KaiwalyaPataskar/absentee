import React from 'react';
import { Form, Button, Label, FormGroup, Input, Row, Col } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <nav color="light" className="navbar navbar-expand-md App-header">
          <label>User From</label>
          <div className="buttonWrapper">
            <Button className="btn">Upload</Button>
          </div>
          
        </nav>
          {this.props.children}
      </>
    )
  }
}
export default Header;