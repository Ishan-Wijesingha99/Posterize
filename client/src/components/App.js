import React from "react";
import { Navbar } from "./Navbar";
import { Route, Routes, Link } from "react-router-dom"
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { AboutUs } from "./AboutUs";
import { Cart } from "./Cart";
import { ContactUs } from "./ContactUs";
import { IndividualPoster } from "./IndividualPoster";
import { LogIn } from "./LogIn";
import { ShippingAndReturns } from "./ShippingAndReturns";
import { SavedPage } from "./SavedPage";
import { SignUp } from "./SignUp";


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
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/saved" element={<SavedPage />}/>
        <Route path="/shippingandreturns" element={<ShippingAndReturns />}/>
        <Route path="/individualposter" element={<IndividualPoster />}/>
      </Routes>

      <Footer />
    </div>
  )
}