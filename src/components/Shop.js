import Cart from '../containers/Cart';
import ProductList from '../containers/ProductList';
import React from 'react';

const Shop = (props) => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Buy or Sell Your Equipment</h1>
            </div>

        </div>
        <div className="row">
            <div className="col-md-8">
                <ProductList />
            </div>
            <div className="col-md-4">
                <Cart />
            </div>
      </div>
    </div>
    );
}

export default Shop
