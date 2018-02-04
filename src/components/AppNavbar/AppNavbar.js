import React, { Component } from 'react';
import './AppNavbar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="AppNavbar">
    		<Navbar.Header>
    			<Navbar.Brand>
    				<a href="#top">
              <div className="AppNavbar-icon">aik</div>
            </a>
    			</Navbar.Brand>
    			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
    			<Nav>
    				<NavItem eventKey={1} href="#skills">
    					Skills
    				</NavItem>
    				{/* <NavItem eventKey={2} href="#achievements">
    					Achievements
    				</NavItem> */}
            <NavItem eventKey={3} href="#experiences">
    					Experiences
    				</NavItem>
            <NavItem eventKey={3} href="#projects">
    					Projects
    				</NavItem>
    			</Nav>
    			<Nav pullRight>
    				<NavItem eventKey={1} href="#contact">
    					Contact
    				</NavItem>
    			</Nav>
    		</Navbar.Collapse>
    	</Navbar>
    );
  }
}

export default AppNavbar;
