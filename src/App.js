import * as React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductList from "./pages/ProductList";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import './stylesheets/layout.css';
import './stylesheets/products.css';
import './stylesheets/sidebar.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/login' exact element={<LoginPage/>}/>
          <Route path='/register' exact element={<CartPage/>}/>
          <Route path='/product' exact element={<ProductList/>}/>
          <Route path='/cart' exact element={<RegisterPage/>}/>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
