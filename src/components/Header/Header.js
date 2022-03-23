import React from 'react';
import './Header.css';
import logo from '../../images/images/logo.jpg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="header" bg="light" expand="lg">
            <Container>
                <div className='d-flex justify-content-center align-items-center'>
                    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                    <h4 className='header-title'>Faija Akter Faiju</h4>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <ul>
                            <li><a className='list-item me-5' href="#action1">HOME</a></li>
                            <li><a className='list-item me-5' href="#action2">SHOP</a></li>
                            <li><a className='list-item me-5' href="#action2">CART</a></li>
                            <li><a className='list-item ' href="#action2">ABOUT US</a></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;