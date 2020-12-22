import React, {Component} from "react";
import {Button, ListGroup, Row, Col} from "react-bootstrap";

class ItemList extends Component {
    render() {
        return (
           /* <Form className='bg-dark mt-4 p-3 rounded'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-warning'>Items Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Items Name" />
                    <Form.Text className="text-muted">
                        Please be precise while entering items name!
                    </Form.Text>
                </Form.Group>
                <Button variant='warning' type="submit">
                    Submit
                </Button>
            </Form>*/
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