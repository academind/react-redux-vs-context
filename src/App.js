import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
