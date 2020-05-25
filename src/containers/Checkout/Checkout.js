// @flow strict

import React from 'react';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import queryString from 'query-string';
import { Route } from 'react-router-dom';
import Contentdata from '../Checkout/ContentData/Contentdata';


class Checkout extends React.Component {
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0
        }
    }
    componentDidMount() {
        //console.log(this.props.location.search);
        let query = queryString.parse(this.props.location.search);
        //console.log(query);
        let updatedIngredients = {}
        for (let item in query) {
            //console.log(item)
            updatedIngredients[item] = +query[item]
        }
        //console.log(updatedIngredients)
        this.setState({ ingredients: updatedIngredients })

    }
    purchaseContinued = () => {
        this.props.history.replace('/checkout/content-data');
    }
    purchaseCancelled = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <CheckOutSummary ingredients={this.state.ingredients} onCancelled={this.purchaseCancelled} onContinued={this.purchaseContinued} />
                <Route path={this.props.match.path + '/content-data'} render={() => (<Contentdata ingredients={this.state.ingredients} />)} />
            </div>
        );
    }
}

export default Checkout;