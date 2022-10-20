import React from "react";
import { Navbar } from "./Navbar";
import { Route, Routes, Link } from "react-router-dom"
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { AboutUs } from "./AboutUs";
import { Cart } from "./Cart";
import { ContactUs } from "./ContactUs";
import { IndividualPoster } from "./IndividualPoster";
import { Login } from "./LogIn";
import { SignIn } from "./SignIn";
import { SavedFavourites } from "./SavedFavourites";
import { ShippingAndReturns } from "./ShippingAndReturns";


export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/item" element={<IndividualPoster />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/saved" element={<SavedFavourites />}/>
        <Route path="/shippingandreturns" element={<ShippingAndReturns />}/>
      </Routes>

      <Footer />
    </div>
  )
}