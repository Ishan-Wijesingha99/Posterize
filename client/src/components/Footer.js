import React from "react";
import twitterIcon from '../images/icons/twitterIcon.png'
import facebookIcon from '../images/icons/facebookIcon.png'
import instagramIcon from '../images/icons/instagramIcon.png'

import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-around py-6 px-4 bg-green-600 border-t-2 border-black">

      <div className="flex flex-col items-center justify-between h-[130px]">
        <a href="https://twitter.com/" target="_blank">
          <img
          src={twitterIcon}
          alt=""
          className="w-[28px] h-[28px] cursor-pointer transition ease-out hover:scale-125 duration-200"
          />
        </a>

        <a href="https://instagram.com/" target="_blank">
          <img
          src={instagramIcon}
          alt=""
          className="w-[30px] h-[30px] cursor-pointer transition ease-out hover:scale-125 duration-200"
          />
        </a>

        <a href="https://facebook.com/" target="_blank">
          <img
          src={facebookIcon}
          alt=""
          className="w-[28px] h-[28px] cursor-pointer transition ease-out hover:scale-125 duration-200"
          />
        </a>
      </div>

      <div className="flex flex-col items-center justify-center justify-between h-[130px]">

        <Link
        to='/aboutus'
        className="p-2 cursor-pointer transition ease-out hover:scale-110 font-silkscreen font-extrabold duration-200"
        >
          About Us
        </Link>

        <Link
        to='/contactus'
        className="p-2 cursor-pointer transition ease-out hover:scale-110 font-silkscreen font-extrabold duration-200"
        >
          Contact Us
        </Link>

        <Link
        to='/shippingandreturns'
        className="p-2 cursor-pointer transition ease-out hover:scale-110 font-silkscreen font-extrabold duration-200"
        >
          Shipping and Returns
        </Link>
      </div>
    </div>
  )
}