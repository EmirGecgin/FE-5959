import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const navbarMenuItems = ["Home", "About", "Contact"]

function NavbarSection() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="p-4">
            <Container>
                <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            navbarMenuItems.map((item, index) => (
                                <Nav.Link key={index} href={`#${item.toLowerCase()}`}>{item}</Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavbarSection