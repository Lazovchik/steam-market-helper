import React, {Component} from "react";
import {Button, ListGroup, Row, Col} from "react-bootstrap";

class ItemList extends Component {
    render() {
        return (
            <ListGroup className='bg-dark mt-4 p-3 rounded'>
                <ListGroup.Item>
                    A
                    <Button variant='warning' type='submit' className='float-right btn-sm'>
                        Remove
                    </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    B
                    <Button variant='warning' type="submit" className='float-right btn-sm'>
                        Remove
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}

export default ItemList;