import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { addProductToCart } from '../store/actions';
import './Products.css';

class ProductsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />
        <main className="products">
          <ul>
            {this.props.products.map(product => (
              <li key={product.id}>
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={this.props.addProductToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
