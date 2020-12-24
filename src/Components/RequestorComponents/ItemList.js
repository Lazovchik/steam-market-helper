import React, {Component} from "react";
import {Button, ListGroup, Row, Col} from "react-bootstrap";

class ItemList extends Component {
    constructor(props) {

        super(props);

        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            wList:''
        }

    }

    componentDidMount() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        const val = values

        this.setState({ wList: val })
        console.log(val)
        console.log(this.state)
    }

    handleClick = () => {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        const val = values

        this.setState({ wList: val })
        console.log(this.state.wList)
    }

    listRender (arr) {
        let list = []
        for (let i = 0; i <arr.length; i++)
        {
            list.push (
                <ListGroup.Item>
                    {arr[i]}
                    <Button variant='warning' type='submit' className='float-right btn-sm'>
                        Remove
                    </Button>
                </ListGroup.Item>
            )
        }
        return list
    }
    render() {
        const arr = this.state.wList
        /*const listItems = arr.map((weapon) =>
                <ListGroup.Item>
                    {weapon}
                    <Button variant='warning' type='submit' className='float-right btn-sm'>
                        Remove
                    </Button>
                </ListGroup.Item>
        )*/

        return (
            <ListGroup className='bg-dark mt-4 p-3 rounded' >
                {this.listRender(arr)}
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
                <Button  variant='warning' type="submit" className='mt-3' onClick={this.handleClick}>
                    Update
                </Button>
            </ListGroup>
        );
    }
}

export default ItemList;