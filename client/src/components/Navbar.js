import React from "react";
import cartIcon from '../images/icons/cartIcon.png'
import userIcon from '../images/icons/userIcon.png'
import bookmarkIcon from '../images/icons/bookmarkIcon.png'


export const Navbar = () => {


  const clickBookmark = () => {
    console.log('clicked bookmark')
  }

  const clickCart = () => {
    console.log('clicked cart')
  }

  const clickUser = () => {
    console.log('clicked user')
  }

  return (
    <div className="flex flex-row items-center justify-between py-6 px-4 bg-green-600 shadow-lg shadow-gray-400 border-b-2 border-black">
      <h2
      className="text-4xl font-silkscreen font-extrabold cursor-pointer"
      >
        POSTERISE
      </h2>

      <div className="flex flex-row items-center justify-between">
        <img
        src={bookmarkIcon}
        alt=""
        className="w-[30px] h-[30px] ml-2 mr-1 cursor-pointer transition ease-out hover:scale-125 duration-200"
        onClick={clickBookmark}
        />

        <img
        src={cartIcon}
        alt=""
        className="w-[35px] h-[30px] mx-2 cursor-pointer transition ease-out hover:scale-125 duration-200"
        onClick={clickCart}
        />

        <img
        src={userIcon}
        alt=""
        className="w-[35px] h-[35px] mx-2 cursor-pointer transition ease-out hover:scale-125 duration-200"
        onClick={clickUser}
        />
      </div>
    </div>
  )
}