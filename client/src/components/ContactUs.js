import React, {useEffect} from "react";
import { Link } from 'react-router-dom'



export const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-col items-center justify-center py-8 py-4 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">

        <h2 className="text-2xl mb-12 text-gray-300 font-silkscreen w-3/4 text-center">Have a question regarding an order?</h2>
        
        <p className="text-lg mb-12 text-gray-300 w-3/4 text-justify">We take your concerns seriously! We would love to answer any questions or tend to any problems you are having. Please contact us below and describe in detail what exactly can we help you with. We will get back to you in a maximum of 2 business days. Please include your order number if you are inquiring about an order.</p>

        <form className="flex flex-col w-3/5">
          <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-5 bg-gray-300 placeholder:text-black"
          />

          <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-5 bg-gray-300 placeholder:text-black"
          />

          <input
          type="text"
          name="order-number"
          placeholder="Enter your order number"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-5 bg-gray-300 placeholder:text-black"
          />

          <textarea
          name="message"
          rows="10"
          placeholder="Enter your message"
          className="p-2 border-2 border-black rounded-lg focus:outline-none mb-8 bg-gray-300 placeholder:text-black"
          >
          </textarea>

          <button
          className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl"
          >
            Get In Touch
          </button>
        </form>

      </div>

      <div className="flex flex-row items-center justify-center py-8 bg-gray-600 mx-4 border-2 border-black rounded-lg mt-32">
        <Link 
        to="/sport"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          SPORT
        </Link>

        <Link 
        to="/artandnature"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ART AND NATURE
        </Link>

        <Link
        to="/motivational"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          MOTIVATIONAL
        </Link>

        <Link
        to="/movies"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          MOVIES
        </Link>

        <Link
        to="/anime"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ANIME
        </Link>

        <Link
        to="/animals"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ANIMALS
        </Link>
      </div>
      
    </div>
  )
}