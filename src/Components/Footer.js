import React, {Component} from "react";

//Bootstrap
import {Navbar, Nav} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed='bottom'>
                <Navbar.Collapse className='justify-content-center'>
                    <Nav className="text-warning flex-column text-center">
                        <Nav.Item>
                            Project done as a part of ECE Paris studying course
                        </Nav.Item>
                        <Nav.Item>
                            Artemii Lazovskii, Jean Prouvost, Daniel Marrin
                        </Nav.Item>
                        <Nav.Item>
                            2020
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Footer;
