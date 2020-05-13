import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSidebar: false
    }
    sideBarClosed = () => {
        this.setState({
            showSidebar: false
        })
    }
    sideBarToggler = () => {
        this.setState((preState) => ({
            showSidebar: !preState.showSidebar
        }));
    }
    render() {
        return (
            <Aux>
                <Toolbar clicked={this.sideBarToggler} />
                <SideDrawer clicked={this.sideBarClosed} show={this.state.showSidebar} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>

            </Aux>
        );

    }
}
export default Layout;