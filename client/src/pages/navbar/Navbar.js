import  './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const LandingNavbar = () => {
    return (
        <div className="LandingNavbar">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto d-flex gap-5">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                                <Nav.Link as={Link} to="/signup" className='border custom-bg'>Sign up</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}

export default LandingNavbar;
