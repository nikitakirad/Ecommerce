import './App.css';
import Products from './containers/Products/Products';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/layout/layout';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Layout></Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/products/:id" component={ProductDetails}/>
          <Route path="/products"  component={Products}/>
          <Redirect from="/" to="/products" />
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
