import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './burgeringredient/burgeringredient'

const Burger=(props)=>{
    let incomingIngredients = Object.keys(props.ingredients)
        .map(IngKey=>{
            return [...Array(props.ingredients[IngKey])].map((_,i)=>{
                return <BurgerIngredient key={IngKey + i} type={IngKey}/>;
            });
        }).reduce((arr, c_array)=>{
            return arr.concat(c_array)
        },[]);
        if(incomingIngredients.length === 0){
            incomingIngredients=<p style={{fontWeight:"bolder"}}>Please Add Ingredients</p>
        }
    return(
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {incomingIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
    )
}
export default Burger;
