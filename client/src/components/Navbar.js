import React, { useState } from "react";
import cartIcon from '../images/icons/cartIcon.png'
import userIcon from '../images/icons/userIcon.png'
import bookmarkIcon from '../images/icons/bookmarkIcon.png'

import { Link } from "react-router-dom"



export const Navbar = ({loggedIn, setLoggedIn}) => {
  const [userDropdown, setUserDropdown] = useState(false)

  const clickUser = () => {
    setUserDropdown(prev => !prev)
    console.log(userDropdown)
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-6 px-4 bg-green-600 shadow-lg shadow-gray-400 border-b-2 border-black">
        <Link to="/">
          <h2
          className="text-4xl font-silkscreen font-extrabold cursor-pointer"
          >
            POSTERISE
          </h2>
        </Link>

        <div className="flex flex-row items-center justify-between">
          <Link to='/saved'>
            <img
            src={bookmarkIcon}
            alt=""
            className="w-[30px] h-[30px] ml-2 mr-1 cursor-pointer transition ease-out hover:scale-125 duration-200"
            />
          </Link>
          
          <Link to="/cart">
            <img
            src={cartIcon}
            alt=""
            className="w-[35px] h-[30px] mx-2 cursor-pointer transition ease-out hover:scale-125 duration-200"
            />
          </Link>

          <img
          src={userIcon}
          alt=""
          className="w-[35px] h-[35px] mx-2 cursor-pointer transition ease-out hover:scale-125 duration-200"
          onClick={clickUser}
          />
        </div>
      </div>

      {userDropdown && (
        <div className="bg-gray-600 p-4 shadow-lg shadow-gray-400 border-b-2 border-black">

          {loggedIn ? (

            <Link
            className="cursor-pointer font-silkscreen font-extrabold"
            to="/"
            >
              Logout
            </Link>

          ) : (

            <div className="flex flex-col">
              <Link
              className="cursor-pointer font-silkscreen font-extrabold mb-4"
              to="/signup"
              >
                Sign Up
              </Link>

              <Link
              className="cursor-pointer font-silkscreen font-extrabold"
              to="/login"
              >
                Log In
              </Link>
            </div>

          )}

        </div>
      )}
    </div>
  )
}