import React, {Component} from "react";

//Bootstrap
import {Form, Button} from "react-bootstrap";

class RequestorForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeTrack = this.onChangeTrack.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            wName: '',
            wState: '',
            wTrack: '',
            wPrice:''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ wName: e.target.value })
    }

    onChangeState(e) {
        this.setState({ wState: e.target.value })
    }

    onChangeTrack(e) {
        this.setState({ wTrack: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        localStorage.setItem(JSON.stringify(this.state), JSON.stringify(this.state));
    }

    render() {
        return (
            <Form className='bg-dark mt-4 p-3 rounded' onSubmit={this.onSubmit}>
                <Form.Group controlId="ItemName">
                    <Form.Label className='text-warning'>Items Name</Form.Label>
                    <Form.Control type="text" placeholder="Weapon | Name" value={this.state.wName} onChange={this.onChangeName} />
                    <Form.Text className="text-muted">
                        Example: AK-47 | Phantom Disruptor
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="ItemState" value='Field-Tested' onChange={this.onChangeState} >
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
                            onChange={this.onChangeTrack}
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