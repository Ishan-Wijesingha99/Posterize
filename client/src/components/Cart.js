import React, { useState, useEffect } from "react";
import singlePoster from '../images/posters/art and nature/artandnature1.jpg'

import { authenticateToken } from '../utils/AuthenticateToken'


export const Cart = ({loggedIn, setLoggedIn}) => {

  useEffect(() => {

    const trueOrFalse = authenticateToken()

    setLoggedIn(trueOrFalse)

    window.scrollTo(0, 0)
    
  }, [])


  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-col items-center justify-center py-8 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">

        <p className="text-3xl my-4 text-gray-300 font-silkscreen w-3/4 text-center">Items in Cart: </p>

        <div className="flex flex-row items-center justify-between w-5/6 p-8 bg-gray-300 border-2 border-black rounded-lg mt-8">
          <img
          src={singlePoster}
          alt="cart poster icon" 
          className="h-[250px] border-2 border-black rounded-lg"
          />

          <div>
            <p className="text-2xl mb-6">Price: A$39.99</p>

            <label htmlFor="quantity" className="text-2xl">Quantity</label>
            <br />
            <input type="number" id="quantity" name="quantity" min="1" placeholder="Quantity" className="p-2 border-2 border-black rounded-lg text-black mt-2 mb-6 w-full"/>

          </div>
        </div>



        <div className="flex flex-row items-center justify-between w-5/6 p-8 bg-gray-300 border-2 border-black rounded-lg mt-8">
          <img
          src={singlePoster}
          alt="cart poster icon" 
          className="h-[250px] border-2 border-black rounded-lg"
          />

          <div>

            <p className="text-2xl mb-6">Price: A$39.99</p>

            <label htmlFor="quantity" className="text-2xl">Quantity</label>
            <br />
            <input type="number" id="quantity" name="quantity" min="1" placeholder="Quantity" className="p-2 border-2 border-black rounded-lg text-black mt-2 mb-6 w-full"/>

          </div>
        </div>

      </div>



      <div className="flex flex-col items-center justify-center py-8 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg my-8">
        <p className="text-3xl my-4 text-gray-300 font-silkscreen text-center">Order Summary...</p>
        <p className="text-xl my-4 text-gray-300 ml-8">Subtotal: </p>
        <p className="text-xl my-4 text-gray-300 ml-8">Shipping:</p>
        <p className="text-xl my-4 text-gray-300 ml-8">Total: </p>
        <button className="text-xl my-4 ml-8 bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black">Proceed to Checkout</button>
      </div>


      
    </div>
  )
}