import React, {useEffect} from "react";

import movies1 from '../images/posters/movies/movies1.jpg'
import movies2 from '../images/posters/movies/movies2.jpg'
import movies3 from '../images/posters/movies/movies3.jpg'
import movies4 from '../images/posters/movies/movies4.jpg'
import movies5 from '../images/posters/movies/movies5.jpg'
import movies6 from '../images/posters/movies/movies6.jpg'
import movies7 from '../images/posters/movies/movies7.jpg'
import movies8 from '../images/posters/movies/movies8.jpg'
import movies9 from '../images/posters/movies/movies9.jpg'
import movies10 from '../images/posters/movies/movies10.jpg'
import movies11 from '../images/posters/movies/movies11.jpg'
import movies12 from '../images/posters/movies/movies12.jpg'
import movies13 from '../images/posters/movies/movies13.jpg'
import movies14 from '../images/posters/movies/movies14.jpg'
import movies15 from '../images/posters/movies/movies15.jpg'
import movies16 from '../images/posters/movies/movies16.jpg'
import movies17 from '../images/posters/movies/movies17.jpg'
import movies18 from '../images/posters/movies/movies18.jpg'
import movies19 from '../images/posters/movies/movies19.jpg'
import movies20 from '../images/posters/movies/movies20.jpg'
import movies21 from '../images/posters/movies/movies21.jpg'




const arrayOfImages = [movies1, movies2, movies3, movies4, movies5, movies6, movies7, movies8, movies9, movies10, movies11, movies12, movies13, movies14, movies15, movies16, movies17, movies18, movies19, movies20, movies21]

const arrayOfJSX = arrayOfImages.map((imageString, i) => {
  return (
    <div className="flex flex-col items-center justify-center" key={i+1}>
      <img
      src={imageString}
      alt={`movies poster - ${i + 1}`}
      className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
      />
    </div>
  )
})



export const Movies = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">MOVIES</h2>
      </div>

      <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">

        {arrayOfJSX}
        
      </div>

    </div>
  )
}