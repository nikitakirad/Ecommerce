import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react'
import styles from './layout.module.css';
const Layout = () => {
    const countOfSelectedProducts = useSelector(state => {
        return state.count
    });
    return(
        <div style={{backgroundColor:'black'}}>
        <div className={styles.container}>
            <NavLink to="/products" className={styles.link}>HOME</NavLink>
            <NavLink to="/checkout" className={styles.link} style={{float:'right'}}>
                <span className={styles.cartcontainer}>
                    <Icon link  name='shopping cart' size='large'/>
                    <span className={styles.badge}>{countOfSelectedProducts}</span>
                </span>
            </NavLink>
        </div>
    </div>
    )
}

export default Layout;