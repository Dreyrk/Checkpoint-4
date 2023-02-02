import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import OrdersPage from "../pages/OrdersPage";
import FavsPage from "../pages/FavsPage";

function Routing({ setLogged }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile setLogged={setLogged} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/favs" element={<FavsPage />} />
    </Routes>
  );
}

export default Routing;
