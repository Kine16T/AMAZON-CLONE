import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/Auth/Signup";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Auth" element={<Signup />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
