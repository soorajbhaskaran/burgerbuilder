import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Orderoverview from '../../components/Burger/Orderoverview/Orderoverview';

const INCREDIENT_PRICE = {
    cheese: 12,
    bacon: 10,
    meat: 14,
    salad: 8
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0

        },
        totalPrice: 10,
        purchaseble: false,
        purchase: false
    }
    updatedOrder(ingredients) {
        const purchaseChecking = Object.keys(ingredients).map((item) => { return ingredients[item] }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({
            purchaseble: purchaseChecking > 0
        });
    }
    addIngredient = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const newUpdatedPrice = this.state.totalPrice + INCREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newUpdatedPrice
        });
        this.updatedOrder(updatedIngredients);
    }
    removeIngredient = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const newUpdatedPrice = this.state.totalPrice - INCREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newUpdatedPrice
        });
        this.updatedOrder(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({ purchase: true })
    }
    purchaseComplete = () => {
        this.setState({
            purchase: false
        });
    }
    purchaseContinue = () => {
        alert('You can continue');
    }
    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchase} clicked={this.purchaseComplete}>
                    <Orderoverview ingredients={this.state.ingredients}
                        show={this.purchaseComplete}
                         continue={this.purchaseContinue} price={this.state.totalPrice}/>
                </Modal>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div><Buildcontrols ingredientAdd={this.addIngredient} ingredientReduce={this.removeIngredient} disable={disabledInfo} price={this.state.totalPrice} purchase={this.state.purchaseble} ordered={this.purchaseHandler} /></div>

            </Aux>

        );
    }
}
export default BurgerBuilder;
