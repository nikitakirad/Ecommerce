import React,{Component} from 'react';
import Product from '../../components/Product/Product';
import styles from './Products.module.css';
import axios from 'axios';
import Loader from '../../components/ui/loader/Loder';
import SearchSort from '../../components/ui/SearchSort/SearchSort';

class Products extends Component{
    state={
        products:null,
        error:false,
        loading:true,
        productsbycategory:null,
        searchProduct:null
    }
    componentDidMount(){ 
        axios.get( 'https://fakestoreapi.com/products' )
            .then( response => {
                this.setState({products:response.data,loading:false})
            } )
            .catch( error => {
                this.setState({error:true,loading:false})
            } );
    }
    clickHandler=(id)=>{
        this.props.history.push(`/products/${id}`)
    }
    sortHandler = (e)=>{
        let arrOfSortedProduct = [];
        let products=[...this.state.products];
        for(let i=0;i<products.length;i++){
            if(products[i].category === e.target.value){
                arrOfSortedProduct.push(products[i]);
            } 
            if(e.target.value === 'All'){
                arrOfSortedProduct.push(products[i]);
            }
            if(e.target.value === 'under 50$'){
                if(products[i].price <= 50){
                    arrOfSortedProduct.push(products[i]);
                }
            }
            if(e.target.value === '100$-150$'){
                if(products[i].price > 100 && products[i].price <= 150){
                    arrOfSortedProduct.push(products[i]);
                }
            }
            if(e.target.value === '50$-100$'){
                if(products[i].price > 50 && products[i].price <= 100){
                    arrOfSortedProduct.push(products[i]);
                }
            }
        }
        this.setState({productsbycategory:arrOfSortedProduct})
    }
    searchHandler = (event) =>{
        let products=[...this.state.products];
        let searchedProductInfo;
        products.forEach(data=>{
            if(data.title === event.target.value){
                searchedProductInfo=data
            }
        })
        this.setState({searchProduct:searchedProductInfo});
    }
    render(){
        let product,sortData;
        const {products,loading,error,productsbycategory,searchProduct}={...this.state}
        if(products){
            product=products.map(data=>(
                <Product key={data.id}
                    id={data.id}
                    productName={data.title}
                    productPrice={data.price}
                    productImage={data.image}
                    onclickHandler={this.clickHandler}
                />
           ))
        }
        if(searchProduct){
            product=<Product 
            key={searchProduct.id}
            id={searchProduct.id}
            productName={searchProduct.title}
            productPrice={searchProduct.price}
            productImage={searchProduct.image}
            onclickHandler={this.clickHandler}
        />
        }
        if(productsbycategory){
            sortData=productsbycategory.map(data=>(
                <Product 
                    key={data.id}
                    id={data.id}
                    productName={data.title}
                    productPrice={data.price}
                    productImage={data.image}
                    onclickHandler={this.clickHandler}
                />
           ))
        }
        return(
            <div className={styles.container}>
                <SearchSort onSelect={this.sortHandler} onSearch={this.searchHandler}/>
               {!productsbycategory ? product : sortData}
               {loading ? <Loader /> : null}
               {error ? <div>Network Problem please refresh</div> : null}
            </div>
        )
    }
}
export default Products;

