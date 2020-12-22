import React, {Component} from "react";

//Bootstrap
import {Navbar} from "react-bootstrap";

class HeaderBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                    Steam Market Helper
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default HeaderBar;