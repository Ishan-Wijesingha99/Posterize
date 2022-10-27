import React, { useState } from "react";



export const SignUp = ({loggedIn, setLoggedIn}) => {
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

  console.log(formData)

  const handleFormSubmit = event => {
    event.preventDefault()

    console.log('hey homie')

    // once the user is logged in, change loggedIn to true, and the page will automatically be changed
  }

  return (
    <div className="min-h-screen mt-32">

      {loggedIn ? (

        <div className="flex flex-col items-center justify-center mx-auto">
          <h2 className="text-4xl font-silkscreen font-extrabold text-center mb-12">You are are logged in</h2>

          <a href="/" className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl">
            Home Page
          </a>
        </div>

      ) : (

        <div className="flex flex-col justify-center items-center py-12 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">
          <p className="text-2xl mb-8 text-gray-300 font-silkscreen">Enter details to create a user...</p>

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
            type="text"
            name="password"
            placeholder="Enter password"
            className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
            onChange={handleInputChange}
            />

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