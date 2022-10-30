import React, { useState, useEffect } from "react";

import { authenticateToken } from '../utils/AuthenticateToken'
import { Link } from 'react-router-dom'



export const LogIn = ({loggedIn, setLoggedIn}) => {

  useEffect(() => {

    const trueOrFalse = authenticateToken()

    setLoggedIn(trueOrFalse)
    
  }, [])

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = event => {
    setLoginFormData(prevObject => {
      return {
        ...prevObject,
        [event.target.name]: event.target.value
      }
    })
  }

  console.log(loginFormData)

  const handleFormSubmit = async event => {
    event.preventDefault()

    const url = 'http://localhost:4000/api/login'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...loginFormData
        })
      })

      const data = await response.json()

      console.log(data)

      if(data.user) {
        console.log(data.user)
        // this is where you change the state so that the entire webpage knows that the user is loggedIn

        // once this is successful, we save the JWT to localStorage, and then when we render each component for the first time, we check localStorage to see if a token exists, we then decode it using jwt-decode, and if the expiration date has passed, then we delete it from localStorage

        // when each component is rendered, if the token in localStorage is still valid, we set loggedIn to true (can use useEffect())

        // we can prop drill loggedIn and setLoggedIn to all the components

        // there is no point in passing loggedIn and setLoggedIn to components that are just static and don't change regardless of whether the user is logged in or not

        // the jwt token in localStorage doesn't just get rid of itself, we need to decode it, and if the expiration date has passed, then we delete it from localStorage ourselves

        // we need to write a utils function that we can call at the start of the rendering of each component, this function sees if the jwt exists in localStorage or not, and whether it has expired or not

        // logging out is just the deletion of the jwt token from localStorage, that way when each component is rendered for the first time, it won't think you're logged in
        
        // save accessToken generated in /login route on backend to localStorage
        window.localStorage.setItem('token', data.accessToken)

        // change state so that entire website knows you are logged in
        setLoggedIn(true)

      }

    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div>

      {loggedIn ? (

        <div className="flex flex-col items-center justify-center mx-auto min-h-screen">
          <h2 className="text-4xl font-silkscreen font-extrabold text-center my-12">You are logged in</h2>

          <Link to="/" className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl my-12">
            Home Page
          </Link>
        </div>

      ) : (

        <div className="min-h-screen mt-32">
          <div className="flex flex-col justify-center items-center py-12 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">
            <p className="text-2xl mb-8 text-gray-300 font-silkscreen">Enter details to log in...</p>

            <form 
            className="flex flex-col w-3/5"
            onSubmit={handleFormSubmit}
            >
              <input
              type="text"
              name="email"
              placeholder="Enter email"
              className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
              onChange={handleInputChange}
              />

              <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
              onChange={handleInputChange}
              />

              <button
              className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl"
              >
                Log In
              </button>
            </form>
          </div>
      </div>

      )}

    </div>
  )
}