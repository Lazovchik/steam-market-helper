import React, {Component} from "react";

//Bootstrap
import {Form, Button} from "react-bootstrap";

class RequestorForm extends Component {
    render() {
        return (
            <Form className='bg-dark mt-4 p-3 rounded'>
                <Form.Group controlId="ItemName">
                    <Form.Label className='text-warning'>Items Name</Form.Label>
                    <Form.Control type="text" placeholder="Weapon | Name " />
                    <Form.Text className="text-muted">
                        Example: AK-47 | Phantom Disruptor
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="ItemState">
                    <Form.Control as="select">
                        <option>Battle-Scarred</option>
                        <option>Well-Worn</option>
                        <option>Field-Tested</option>
                        <option>Minimal Wear</option>
                        <option>Factory New</option>
                    </Form.Control>
                </Form.Group>
                <fieldset>
                    <Form.Group className='text-warning'>
                        <Form.Check
                            type="radio"
                            label="StatTrak™"
                            name="radio"
                            id="radioStatTrack"
                        />
                        <Form.Check
                            type="radio"
                            label="Regular"
                            name="radio"
                            id="radioRegular"
                        />
                    </Form.Group>
                </fieldset>
                <Button variant='warning' type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default RequestorForm;