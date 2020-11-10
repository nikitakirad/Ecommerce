import React from 'react';
import styles from './CheckoutProduct.module.css';
import Button from '../ui/Button/Button';

const CheckoutProduct=(props)=>{
    let {image,count,title,category,price,removeProduct}={...props}
    return(
        <div className={styles.container}>
            <div className={styles.productimage}>
                <img src={image} alt="" width="200px" height="200px"/><br/>
            </div>
            <div className={styles.productdetails}>
                <h3>{title}</h3>
                <p>Category: {category}</p>
                <h3>${+price.toFixed(2)}</h3>
                <p>Quantity: {count}</p> <br/>
                <div style={{textAlign:"left"}}>
                    <Button clicked={removeProduct}>Remove</Button>

                </div>
  
            </div>
        </div>
    )
}

export default CheckoutProduct;