import React from 'react';
import { Button, Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import InventoryModal from '../components/inventory';
import Request from '../utils/request-provider';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      files: {}
    }
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }
    ))
  }

  onFileChange = (event) => {
    this.setState({
      files: event.target.files[0]
    })
  }

  uploadFile = () => {
    Request.upload('http://192.168.1.182:3000/v1/schools/1/import', {
      file: this.state.files
    })
    this.toggleModal();
  }

  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Absentee</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Students</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Schools</NavLink>
            </NavItem>
          </Nav>
          <div className="buttonWrapper">
            <Button className="btn" onClick={this.toggleModal}>Upload Student Information</Button>
          </div>
        </Navbar>
        {this.state.isOpen && <InventoryModal onFileChange={this.onFileChange} isOpen={this.state.isOpen} closeModal={this.toggleModal} uploadFile={this.uploadFile} />}
        {this.props.children}
      </>
    )
  }
}
export default Header;