import React from "react";



export const SignUp = () => {
  return (
    <div className="min-h-screen mt-32">
      <div className="flex flex-col justify-center items-center py-12 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">
        <p className="text-2xl mb-8 text-gray-300 font-silkscreen">Enter details to create a user...</p>

        <form 
        className="flex flex-col w-3/5"
        >
          <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
          />

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
          className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-110 duration-200 border-2 border-black text-xl"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  )
}