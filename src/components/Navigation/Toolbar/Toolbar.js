import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Drawertoggler from '../SideDrawer/Drawertoggler/Drawertoggler';

const toolbar = (props) => (<header className={classes.Toolbar}>
    <Drawertoggler clicked={props.clicked}/>
    <div className={classes.Logo}>
        <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
        <Navigationitems />
    </nav>
</header>);
export default toolbar;