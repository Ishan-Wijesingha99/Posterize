import React, { useState, useEffect } from "react";

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