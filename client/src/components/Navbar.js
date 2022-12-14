import React, { useState, useEffect } from "react";
import cartIcon from '../images/icons/cartIcon.png'
import userIcon from '../images/icons/userIcon.png'
import bookmarkIcon from '../images/icons/bookmarkIcon.png'

import { Link } from "react-router-dom"

import { authenticateToken } from '../utils/AuthenticateToken'



export const Navbar = ({loggedIn, setLoggedIn}) => {
  const [userDropdown, setUserDropdown] = useState(false)

  useEffect(() => {

    const trueOrFalse = authenticateToken()

    setLoggedIn(trueOrFalse)
    
  }, [])

  const clickUser = () => {
    setUserDropdown(prev => !prev)
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

            <p
            className="cursor-pointer font-silkscreen font-extrabold"
            onClick={() => {
              // when user clicks logout, remove the token from localStorage
              window.localStorage.removeItem('token')

              // take user to home page
              window.location.href = '/'
            }}
            >
              Logout
            </p>

          ) : (

            <div className="flex flex-col">
              <Link
              className="cursor-pointer font-silkscreen font-extrabold mb-4"
              to="/createuser"
              >
                Create User
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