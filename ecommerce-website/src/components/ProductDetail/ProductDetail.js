import React from 'react';
import styles from './ProductDetail.module.css';
import Button from '../ui/Button/Button';

const ProductDetail = (props) =>{
    let {productInfo,onIncrement,onDecrement,onAddToCart} =props;
    return(
        <div className={styles.container}>
                <div className={styles.productimage}>
                    <img src={productInfo.image} alt="detailsofproducts" width="400" height="400"/><br/>
                    <div style={{display:'inline-flex',marginTop:'20px'}}>
                        <div className={styles.incdecbutton} 
                            onClick={onDecrement}>-
                        </div>
                        <div className={styles.countbutton}>{productInfo.count}</div>
                        <div className={styles.incdecbutton} 
                        onClick={onIncrement}>+
                        </div>
                    </div>
                </div>
                <div className={styles.productdetails}>
                    <h3>{productInfo.title}</h3>
                    <p >Category: {productInfo.category}</p>
                    <h3>${+productInfo.price.toFixed(2)}</h3>
                    <p>Description: {productInfo.description}</p>
                    <div style={{textAlign:'left',marginTop:'40px'}}>
                        <Button clicked={onAddToCart}>Add to cart</Button>
                    </div>

                </div>
            </div>
    )
}

export default ProductDetail;