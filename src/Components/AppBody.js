import React, {Component} from "react";

import RequestorForm from "./RequestorComponents/RequestorForm";
import ItemList from "./RequestorComponents/ItemList";

//Bootstrap
import {Container} from "react-bootstrap";

class AppBody extends Component {
    render() {
        return (
            <Container>
                <RequestorForm></RequestorForm>
                <ItemList/>
            </Container>
        );
    }
}

export default AppBody;