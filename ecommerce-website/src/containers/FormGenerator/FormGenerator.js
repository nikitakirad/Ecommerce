import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import classes from './FormGenerator.module.css'
import {withRouter} from 'react-router-dom';

const FormGenerator=(props)=>{
    const dispatch = useDispatch();

    const [data,setdata] = useState({
        name:{
            isName: true,
            value:'',
            errormsg:'',
            valid:false,

        },
        email:{
            isEmail: true,
            value:'',
            errormsg:'',
            valid:false,

        },
        phone:{
            isPhone: true,
            value:'',
            errormsg:'',
            valid:false,

        }
    });

    const [formisvalid,setformisvalid] = useState(false);
    const onRemoveAllProduct = ()=> dispatch({type:'REMOVE_ALL_PRODUCTS_FROM_CART'});


    const inputHandler=(event,inputIdentifier)=>{
        const updatedData = {
            ...data
        };
        const updatedFormElement = { 
            ...updatedData[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        
        let isValid = true;

        if (inputIdentifier === 'email' && updatedFormElement.isEmail) {

            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(updatedFormElement.value) && isValid
            if(!isValid)
                updatedFormElement.errormsg="please enter value email";
            else
                updatedFormElement.errormsg="";


        }
        if (inputIdentifier === 'name' && updatedFormElement.isName) {

            const pattern = /^[a-zA-Z ]+$/;
            isValid = pattern.test(updatedFormElement.value) && isValid
            if(!isValid)
                updatedFormElement.errormsg="please enter value name";
            else
                updatedFormElement.errormsg="";


        }

        if (inputIdentifier === 'phone' && updatedFormElement.isPhone) {

            const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            isValid = pattern.test(updatedFormElement.value) && isValid
            if(!isValid)
                updatedFormElement.errormsg="please enter value phone";
            else
                updatedFormElement.errormsg="";


        }
        updatedFormElement.valid=isValid;
        updatedData[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        
        for (let inputIdentifier in updatedData) {
            formIsValid = updatedData[inputIdentifier].valid && formIsValid;
        }
        setdata(updatedData);
        setformisvalid(formIsValid);        
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        onRemoveAllProduct();
        alert('Order Placed Successfully');
        props.history.push('/'); 
   }
    
        return(
            <div className={classes.FormData}>
                <form onSubmit={submitHandler}>
                <input className={classes.Input} type="text" placeholder="Your name" onChange={(event)=>inputHandler(event,'name')}/>
                    {data['name'].errormsg.length > 0 && <span style={{'color':'red'}}>{data['name'].errormsg}</span>}    
                    <input className={classes.Input} type="text" placeholder="Your Phone-no" onChange={(event)=>inputHandler(event,'phone')}/>
                    {data['phone'].errormsg.length > 0 && <span style={{'color':'red'}}>{data['phone'].errormsg}</span>}    
                    <input className={classes.Input} type="text" placeholder="Your Email" onChange={(event)=>inputHandler(event,'email')}/>
                    {data['email'].errormsg.length > 0 && <span style={{'color':'red'}}>{data['email'].errormsg}</span>} <br/>  
                    <button 
                        className={[classes.Button, classes['Success']].join(' ')}
                        disabled={!formisvalid}>
                    BUY</button>
                </form>
            </div>
        )
    
}

export default withRouter(FormGenerator);