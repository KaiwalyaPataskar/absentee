import React from 'react';
import { Button, Nav, Navbar, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Absentee</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/studentListing">Students</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/updateSchool">Schools</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/classListing">Class</NavLink>
            </NavItem>
          </Nav>
          <div className="buttonWrapper">
          <Button className="btn" href="/Inventory/">Upload Student Information</Button>
            {/* <Button className="btn">Upload Student Information</Button> */}
          </div>
        </Navbar>
        {this.props.children}
      </>
    )
  }
}
export default Header;