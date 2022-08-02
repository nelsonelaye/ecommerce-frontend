import React from "react";
import ItemPage from "./Components/itemPage/itemPage";
import Items from "./Components/Items/items";
import Cart from "./Components/Cart/Cart";
import Account from "./Components/Account/Account";
import Header from "./Components/Header/Header";
import Information from "./Components/Checkout/Information";
import Shipping from "./Components/Checkout/Shipping";
import Payment from "./Components/Checkout/Payment";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [scroll, setScroll] = React.useState(false);

  const getScroll = () => {
    const check = window.scrollY;
    if (check >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", getScroll);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/information" element={<Information />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
