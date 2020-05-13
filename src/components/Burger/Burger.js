import React from 'react';
import classes from './Burger.module.css'
import BurgerIncrediant from './BurgerIncrediant/Burgerincrediant';

const burger = (props) => {
    let transformedIngrediants = Object.keys(props.ingredients).map(
        (inKey) => {
            return [...Array(props.ingredients[inKey])].map((_, i) => {
                return <BurgerIncrediant key={inKey + i} type={inKey} />
            });
        }
    ).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngrediants.length === 0) {
        transformedIngrediants = <p>Please enter The items</p>
    }
    console.log(transformedIngrediants);
    return (
        <div className={classes.Burger}>
            <BurgerIncrediant type='bread-top' />
            {transformedIngrediants}
            <BurgerIncrediant type='bread-bottom' />




        </div>
    );
}
export default burger;