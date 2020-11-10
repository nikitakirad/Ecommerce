import React from 'react';
import styles from './Product.module.css';

const Product=(props)=>{
    const { onclickHandler,productImage,productName,productPrice,id }={...props}
    return(
        <>
            <div className={styles.column}>
                <div className={styles.card} onClick={()=>onclickHandler(id)}>
                    <img src={productImage} style={{width:'300px',height:'280px'}} alt="productimage"/>
                    <h5>{productName}</h5>
                    <h5>${productPrice}</h5>
                </div>
            </div>
        </>
    )
}

export default Product;