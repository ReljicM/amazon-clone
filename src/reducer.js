export const initialState = {
    basket: [],
};

//Selector 
export const getBasketTotal = (basket) =>
 basket?.reduce((amount,item) => item.price + amount, 0);

 
 


const reducer = (state, action) => {
    console.log(state)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }; 

        case 'REMOVE_FROM_BASKET':
            console.log('REMOVE_FROM_BASKET', action.item.id, state.item)
            return {
                ...state,
                basket: [...state.basket.filter(item => item.id !== action.item.id)]
            };

         default:
             return state;   
    }
};

export default reducer;
