import React from "react";
import searchIcon from '../images/icons/searchIcon.webp'
import cartIcon from '../images/icons/cartIcon.png'
import userIcon from '../images/icons/userIcon.png'
import bookmarkIcon from '../images/icons/bookmarkIcon.png'


export const Navbar = () => {

  const clickSearch = () => {
    console.log('clicked search')
  }

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

      <div className="flex flex-row">
        <input 
        type="text"
        name="search"
        placeholder="Search for Poster"
        className="h-[50px] w-[250px] border-2 border-black rounded-l-lg border-r-0 p-2"
        />

        <img
        src={searchIcon}
        alt="search icon"
        className="w-[50px] h-[50px] border-2 border-black rounded-r-lg cursor-pointer"
        onClick={clickSearch}
        />
      </div>

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