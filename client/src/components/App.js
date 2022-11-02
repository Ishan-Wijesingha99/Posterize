import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom"

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Homepage } from "./Homepage";
import { AboutUs } from "./AboutUs";
import { Cart } from "./Cart";
import { ContactUs } from "./ContactUs";
import { LogIn } from "./LogIn";
import { ShippingAndReturns } from "./ShippingAndReturns";
import { SavedPage } from "./SavedPage";
import { CreateUser } from "./CreateUser";

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Sport } from "./Sport";
import { ArtAndNature } from "./ArtAndNature";
import { Motivational } from "./Motivational";
import { Anime } from "./Anime";
import { Animals } from "./Animals";
import { Movies } from "./Movies";



// create apollo client in these 3 steps
const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

        <Routes>
          <Route path="/" element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/cart" element={<Cart loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/saved" element={<SavedPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path="/shippingandreturns" element={<ShippingAndReturns />}/>
          <Route path="/login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
          <Route path="/createuser" element={<CreateUser/>}/>
          
          <Route path="/sport" element={<Sport />}/>
          <Route path="/artandnature" element={<ArtAndNature />}/>
          <Route path="/motivational" element={<Motivational />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/anime" element={<Anime />}/>
          <Route path="/animals" element={<Animals />}/>
        </Routes>

        <Footer />
      </div>
    </ApolloProvider>
  )
}