import React from 'react';
import classes from './TotalPrice.css'

const totalprice = (props) =>(
    <div className={classes.TotalPrice}>
        <p className={classes.totalAmount}>Total Amount For Burger : {props.totalAmount}</p>
    </div>
)
export default totalprice;