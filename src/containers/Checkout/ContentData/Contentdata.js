import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './Contentdata.module.css';

class ContentData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            pincode: '',
            street: ''
        }
    }
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }
    render() {
        return (
            <div className={classes.Contentdata}>
                <h2>Enter your contact Data</h2>
                <form>
                    <input className={classes.Input} type='text' placeholder='Name' name='name' />
                    <input className={classes.Input} type='email' placeholder='Email' name='email' />
                    <input className={classes.Input} type='text' placeholder='Postal Code' name='postal' />
                    <input className={classes.Input} type='text' placeholder='Street' name='street' />
                    <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContentData;