import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" component={ProductsPage}>
              <Route index element={<ProductsPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
            <Route path="/cart" component={CartPage} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
