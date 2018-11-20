import React, {Component} from 'react';
import Burger from "../../components/burger/burger";
import Aux from '../../hoc/aux';
import classes from './BurgerBuilder.css';
import BuildControls from '../../components/burger/BuildControls/BuildControls';
import Totalprice from '../../components/burger/TotalPrice/TotalPrice';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import {store} from '../../App';


class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state={
            initialValue: store.getState().ingredients,
            totalPrice:0,
        }
    }
    render(){
        return(
            <Aux>
                <h1 className={classes.Header}>Burger</h1>
                <Burger ingredients={this.props.ings}/>
                <div>
                <Totalprice
                totalAmount={this.props.totalPrice}
                />
                <BuildControls
                increaseIngredientCount={this.props.newIngredientAdd}
                decreaseIngredientCount={this.props.newIngredientRemove}
                /></div>
            </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
        totalPrice: state.totalprice
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        newIngredientAdd: (ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
        newIngredientRemove: (ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
