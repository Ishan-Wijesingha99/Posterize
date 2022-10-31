import React, {useEffect} from "react";
import { Link } from 'react-router-dom'



export const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-col items-center justify-center py-8 pb-4 pt-8 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">

        <h2 className="text-3xl mb-12 text-gray-300 font-silkscreen w-3/4 text-center">About Us</h2>

        <p className="text-xl mb-12 text-gray-300 w-3/4 text-justify">Everyone loves posters. Why? Because a poster allows us to express ourselves; what we like, what we believe, who we are. 
        </p>

        <p className="text-xl mb-12 text-gray-300 w-3/4 text-justify">Our mission was simple, create a platform where people can choose from a diverse array of posters to buy, and then be delivered those posters in a timely and conveniant fashion.</p>

        <p className="text-xl mb-12 text-gray-300 w-3/4 text-justify">Posterize is constantly looking to add more and more posters to our website for our customers to buy.</p>

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