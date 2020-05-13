import React from 'react';
import classes from './Drawertoggler.module.css';

const drawerToggler = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
export default drawerToggler;