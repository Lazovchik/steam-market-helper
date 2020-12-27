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

    handleDelete = (i) => {
        const list = this.state.wList;
        localStorage.removeItem(list[i])
    }

    listRender (arr) {
        let list = []
        for (let i = 0; i <arr.length; i++)
        {
            list.push (
                <ListGroup.Item key={i}>
                    {arr[i]}
                    <Button variant='warning' type='button' className='float-right btn-sm' onClick={()=>this.handleDelete(i)}>
                        Remove
                    </Button>
                </ListGroup.Item>
            )
        }
        return list
    }
    render() {
        const arr = this.state.wList

        return (
            <ListGroup className='bg-dark mt-4 p-3 rounded' >
                {this.listRender(arr)}

                <Button  variant='warning' type="button" className='mt-3' onClick={this.handleClick}>
                    Update
                </Button>
            </ListGroup>
        );
    }
}

export default ItemList;

/*<ListGroup.Item>
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
                </ListGroup.Item>*/