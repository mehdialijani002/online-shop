import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/styles/App.css";
import { CartProvider } from "./cartContext";
import { ToastContainer } from "react-toastify";
const Home = lazy(() => import("./pages/home/index"));
const Confirm = lazy(() => import("./pages/confirm/index"));
const Invalid = lazy(() => import("./pages/pagenotfound/index"));
const Cart = lazy(() => import("./pages/card/index"));

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Suspense
          fallback={<div className="lazy-loading">در حال بارگزاری...</div>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="*" element={<Invalid />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CartProvider>
  );
};

export default App;
