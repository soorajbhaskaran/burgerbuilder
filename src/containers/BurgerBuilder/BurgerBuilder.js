import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Orderoverview from '../../components/Burger/Orderoverview/Orderoverview';
import axios from '../../components/axios/axios_instance'
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INCREDIENT_PRICE = {
    cheese: 12,
    bacon: 10,
    meat: 14,
    salad: 8
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0

        },
        totalPrice: 10,
        purchaseble: false,
        purchase: false,
        isLoading: false
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
        // alert('You can continue');
        this.setState({ isLoading: true });
        const data = {
            'ingredients': this.state.ingredients, 'totalPrice': this.state.totalPrice, customer: {
                name: 'Sooraj Bhaskaran', place: 'Kanhangad', age: 21
            }
        }
        axios.post('/orders.json', data).then(request => {
            // console.log(request);
            this.setState({ isLoading: false, purchase: false })
        }).catch(error => {
            // console.log(error);
            this.setState({ isLoading: false, purchase: false })
        });
    }
    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let order = <Orderoverview ingredients={this.state.ingredients}
            show={this.purchaseComplete}
            continue={this.purchaseContinue} price={this.state.totalPrice} />;
        if (this.state.isLoading) {
            order = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchase} clicked={this.purchaseComplete}>
                    {order}
                </Modal>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div><Buildcontrols ingredientAdd={this.addIngredient} ingredientReduce={this.removeIngredient} disable={disabledInfo} price={this.state.totalPrice} purchase={this.state.purchaseble} ordered={this.purchaseHandler} /></div>

            </Aux>

        );
    }
}
export default withErrorHandler(BurgerBuilder, axios);
