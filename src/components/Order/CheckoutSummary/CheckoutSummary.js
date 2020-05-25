import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Here are the available Burger</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />

            </div>
            <Button btnType='Danger' clicked={props.onCancelled}>DANGER</Button>
            <Button btnType='Success' clicked={props.onContinued}>SUCCESS</Button>
        </div>
    );
}
export default checkoutSummary