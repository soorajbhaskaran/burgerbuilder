import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class Orderoverview extends Component {
    componentDidUpdate() {
        console.log('[Ordercomponent] is updated');
    }
    render() {
        const listItems = Object.keys(this.props.ingredients).map(item => {
            return <li key={item}><span style={{ textTransform: 'capitalize' }}>{item}</span>:{this.props.ingredients[item]}</li>
        })
        return (<Aux>
            <h3>Your Order :</h3>
            <p>A delicious order with following properties :</p>
            <ul>
                {listItems}
            </ul>
            <p textAlign='center'><strong>Total price: {this.props.price}</strong></p>
            <div style={{
                textAlign: "center"
            }}>
                <Button clicked={this.props.show} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.continue} btnType='Success'>CONTINUE</Button>
            </div>

        </Aux >);
    }
};
export default Orderoverview;