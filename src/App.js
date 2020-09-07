import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductsList from "./components/ProductsList";
import ProductForm from "./components/ProductForm";
import ProductPreview from "./components/ProductPreview";


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container p-4">
        <Switch>
        <Route path="/products/:productId">
            <ProductPreview/>
          </Route>
          <Route path="/products-form">
            <ProductForm/>
          </Route>
          <Route path="/products">
            <ProductsList/>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
