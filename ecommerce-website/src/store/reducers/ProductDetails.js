const initialState = {
    cartProducts:[],
    count:0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD_PRODUCT_TO_CART': 
            return {
                ...state,
                cartProducts:state.cartProducts.concat(action.productdetail),
                count:action.count
            }  
        case 'REMOVE_ALL_PRODUCTS_FROM_CART': 
            return {
                ...state,
                cartProducts:[],
                count:0
            }  
        case 'REMOVE_PRODUCT': 
            let productlistofcart=state.cartProducts.slice();
            let products=productlistofcart.filter(data=>data.id !== action.id);
            return {
                ...state,
                cartProducts:products,
            }  
        case 'COUNT_OF_SELECTED_PRODUCTS':
            let countOfSelectedProducts=0;
            state.cartProducts.forEach(data=>{
               countOfSelectedProducts=countOfSelectedProducts+data.count;
            })
            return{
               ...state,
               count:countOfSelectedProducts
            }
        default: return state
    }
};

export default reducer;