import React from 'react';
import Logo from '../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let existClass=[classes.SideDrawer,classes.Closed];
    if(props.show){
        existClass=[classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={existClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Aux>);

};
export default SideDrawer;