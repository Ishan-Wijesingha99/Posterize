import React from "react";



export const LogIn = () => {
  return (
    <div className="min-h-screen mt-32">
      <div className="flex flex-col justify-center items-center py-12 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">
        <p className="text-2xl mb-8 text-gray-300 font-silkscreen">Enter details to log in...</p>

        <form 
        className="flex flex-col w-3/5"
        >
          <input
          type="text"
          name="email"
          placeholder="Enter email"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
          />

          <input
          type="text"
          name="password"
          placeholder="Enter password"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
          />

          <button
          className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}