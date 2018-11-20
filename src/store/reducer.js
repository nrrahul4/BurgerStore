import * as actionTypes from './actions';

const initialState={
    ingredients: {
        salad:0,
        meat:0,
        cheese:0,
    },
    totalprice:40
}
const ingredientCost = {
    cheese:20,
    meat:30,
    salad:10,
};


const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName]+1
                },
                totalprice: state.totalprice + ingredientCost[action.ingredientName],
            };
        case actionTypes.REMOVE_INGREDIENT:
        return {
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName]-1,
            },
            totalprice: state.totalprice - ingredientCost[action.ingredientName],
        };
        default:
            return state;
    }
};
export default reducer;