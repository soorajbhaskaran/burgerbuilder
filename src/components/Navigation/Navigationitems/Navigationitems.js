import React from 'react';
import classes from './Navigationitems.module.css';
import Navigationitem from './Navigationitem/Navigationitem';

const navigationitems = (props) => (
    <ul className={classes.Navigationitems}>
        <Navigationitem link='/' active>Burger</Navigationitem>
        <Navigationitem link='/'>Other</Navigationitem>
    </ul >
);
export default navigationitems;