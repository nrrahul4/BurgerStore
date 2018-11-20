import React from 'react';
import classes from './BuildControl.css'

const buildcontrol =(props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.lessclick} className={classes.Less}>Less</button>
        <button onClick={props.moreclick} className={classes.More}>More</button>
    </div>
)
export default buildcontrol;