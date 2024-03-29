import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";

import ProtectedAdmin from "./pages/Admin/ProtectedAdmin";
import AdminHome from "./pages/Admin/Home";
import Orders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import AdminProductsDetail from "./pages/Admin/AdminProductDetail/AdminProductDetail";

import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path='/' exact element={<Products />} />
            <Route path='/product/:product_id' element={<ProductDetail />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Signup' element={<Signup />} />

            <Route path='/Basket' element={<Basket />} />

            <Route path='*' element={<Error404 />} />

            {/* Outlet */}
            <Route element={<ProtectedAdmin />}>
              <Route index path="/Admin" element={<AdminHome />} />
              <Route path="/Admin/orders" element={<Orders />} />
              <Route path="/Admin/AdminProducts" element={<AdminProducts />} />
              <Route path="/admin/products/:product_id" element={<AdminProductsDetail />} />
              {/* <Route path="/admin/products/new" element={<NewProduct />} /> */}
            </Route>



            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

