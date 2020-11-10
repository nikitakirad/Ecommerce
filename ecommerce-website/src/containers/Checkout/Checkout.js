import React,{ useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import FormGenerator from '../FormGenerator/FormGenerator';
import Button from '../../components/ui/Button/Button';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';

const Checkout = ()=>{
    const dispatch = useDispatch();
    
    let [purchased,setPurchased]=useState(false);

    const purchaseHandler = () =>{
        setPurchased(true)
    }
    
    const onCountOfSelectedProducts = ()=> dispatch({type:'COUNT_OF_SELECTED_PRODUCTS'});
    const onRemoveProductFromCart = (id)=> dispatch({type:'REMOVE_PRODUCT',id:id});

    const orders = useSelector(state => {
        return state.cartProducts

    });

    const count = useSelector(state => {
        return state.count
    });

    useEffect(()=>{
        onCountOfSelectedProducts();
    },[onCountOfSelectedProducts]);
    
    return(
            <>
            <>
                {orders.map(data=>
                    <CheckoutProduct 
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        category={data.category}
                        price={data.price}
                        count={data.count}
                        removeProduct={()=>onRemoveProductFromCart(data.id)}
                    />    
                )}
            </>
            {(count >= 1 && purchased === false)? <div style={{marginTop:'40px'}}>
                <Button clicked={purchaseHandler} >Place Order</Button>
            </div> :null}
            {count <=0 ? <>
                No,Items added in cart!!!
            </>:null}
            {purchased && count>=1 ? <FormGenerator /> : null}
            </>
    )
}

export default Checkout;




