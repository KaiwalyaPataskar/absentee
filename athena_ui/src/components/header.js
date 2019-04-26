import React from 'react';
import { Button, Nav, Navbar, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
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