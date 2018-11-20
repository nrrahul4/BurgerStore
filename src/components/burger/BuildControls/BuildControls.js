import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'cheese', type:'cheese'},
    {label: 'salad', type:'salad'},
    {label: 'meat', type:'meat'},
]

const buildcontrols=(props)=>(
    <div className={classes.BuildControls}>
        {controls.map(control => {
            return <BuildControl
                key={control.label}
                label={control.label}
                lessclick={()=>props.decreaseIngredientCount(control.type)}
                moreclick={()=>props.increaseIngredientCount(control.type)}
            />
        })}
    </div>
)
export default buildcontrols;   