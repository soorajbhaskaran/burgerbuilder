import React from 'react';
import classes from './Buildcontrols.module.css'
import Buildcontrol from './Buildcontrol/Buildcontrol'

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
];

const buildcontrols = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price :<strong>Rs {props.price.toFixed(2)}</strong></p>
        {controls.map(item => (
            <Buildcontrol key={item.label} label={item.label} more={() => props.ingredientAdd(item.type)} less={() => props.ingredientReduce(item.type)} disable={props.disable[item.type]} />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchase} onClick={props.ordered}>Order Now</button>
    </div>
);
export default buildcontrols;