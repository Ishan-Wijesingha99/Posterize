import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


// the creation of a user in the database has nothing to do with JWT authentication, only logging in and logging out

export const CreateUser = () => {
  const [userCreated, setUserCreated] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleInputChange = event => {
    setFormData(prevObject => {
      return {
        ...prevObject,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    const url = 'http://localhost:4000/api/createuser'

    try {
      // sending information from the frontend to the backend is as simple as using fetch, even if the ports are different for frontend and backend, but if the ports are different, you need to use cors() as middleware in backend server.js
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        })
      })

      const data = await response.json()

      if(data.username && data.email && data.password) {
        setErrorMessage(false)
        setUserCreated(true)
      } else {
        setErrorMessage(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mt-32">

      {userCreated ? (

        <div className="flex flex-col items-center justify-center mx-auto">
          <h2 className="text-4xl font-silkscreen font-extrabold text-center mb-12">User has been created, click below to go to login page</h2>

          <Link to="/login" className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl">
            Login Page
          </Link>
        </div>

      ) : (

        <div className="flex flex-col justify-center items-center py-12 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg mb-16">
          <p className="text-2xl mb-8 text-gray-300 font-silkscreen text-center">Enter details to create a user...</p>

          <form 
          className="flex flex-col w-3/5"
          onSubmit={handleFormSubmit}
          >
            <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
            onChange={handleInputChange}
            />

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

            {errorMessage && (
              <p
              className="p-4 border-2 border-black focus:outline-none mb-8 bg-red-500 text-center font-silkscreen font-extrabold"
              >
                Error: User Not Created
              </p>
            )}

            <button
            className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-110 duration-200 border-2 border-black text-xl"
            disabled={!(formData.username && formData.email && formData.password)}
            type='submit'
            >
              Create User
            </button>
          </form>
        </div>

      )}

    </div>
  )
}