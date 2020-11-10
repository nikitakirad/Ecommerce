
import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Loader from '../../components/ui/loader/Loder';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

class ProductDetails extends Component{
    state={
        detailsOfProduct:{count:1},
        show:false,
        noOfProducts:1,
        loading:true,
        error:false
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then( response => {
                let productInfo={...response.data,count:1,oldprice:response.data.price}
                this.setState({detailsOfProduct:productInfo,show:true,loading:false})
            } )
            .catch( error => {
                this.setState({error:true,loading:false})
            } );

    }
    addToCartHandler=()=>{
        this.props.onAddProduct(this.state.detailsOfProduct,this.state.noOfProducts);
        this.props.history.push('/checkout');
    }
    incrementHandler=()=>{
        let updatedetailsofproduct={...this.state.detailsOfProduct};
        updatedetailsofproduct.count=updatedetailsofproduct.count+1;
        let newnoOfProducts=this.state.noOfProducts+1;
        updatedetailsofproduct['price']=updatedetailsofproduct['oldprice'] * (updatedetailsofproduct.count);
        this.setState({detailsOfProduct:updatedetailsofproduct,noOfProducts:newnoOfProducts})
    }
    decrementHandler=()=>{
        let updatedetailsofproduct={...this.state.detailsOfProduct};
        updatedetailsofproduct.count=updatedetailsofproduct.count-1;
        let newnoOfProducts=this.state.noOfProducts-1;
        updatedetailsofproduct['price']=updatedetailsofproduct['price'] - updatedetailsofproduct.oldprice;
        this.setState({detailsOfProduct:updatedetailsofproduct,noOfProducts:newnoOfProducts})
    }
    render(){
        let productInfo;
        let {detailsOfProduct,show,loading,error} = {...this.state}
        if(show){
            productInfo=<ProductDetail productInfo={detailsOfProduct}
            onIncrement={this.incrementHandler}
            onDecrement={this.decrementHandler}
            onAddToCart={this.addToCartHandler}
            />
        }
        return(
            <>
            {productInfo}
            {loading ? <Loader /> : null}
            {error ? <div>Network Problem please refresh</div> : null}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      count:state.count
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: (productdetail,count) => dispatch({type:'ADD_PRODUCT_TO_CART',productdetail:productdetail,count:count}),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);