import React, {useEffect} from "react";

import anime1 from '../images/posters/anime/anime1.jpg'
import anime2 from '../images/posters/anime/anime2.jpg'
import anime3 from '../images/posters/anime/anime3.png'
import anime4 from '../images/posters/anime/anime4.jpg'
import anime5 from '../images/posters/anime/anime5.jpg'
import anime6 from '../images/posters/anime/anime6.jpg'
import anime7 from '../images/posters/anime/anime7.jpg'
import anime8 from '../images/posters/anime/anime8.jpg'
import anime9 from '../images/posters/anime/anime9.jpg'
import anime10 from '../images/posters/anime/anime10.jpg'
import anime11 from '../images/posters/anime/anime11.jpg'
import anime12 from '../images/posters/anime/anime12.jpg'
import anime13 from '../images/posters/anime/anime13.jpg'
import anime14 from '../images/posters/anime/anime14.jpg'
import anime15 from '../images/posters/anime/anime15.jpg'
import anime16 from '../images/posters/anime/anime16.jpg'
import anime17 from '../images/posters/anime/anime17.jpg'
import anime18 from '../images/posters/anime/anime18.jpg'
import anime19 from '../images/posters/anime/anime19.jpg'
import anime20 from '../images/posters/anime/anime20.jpg'
import anime21 from '../images/posters/anime/anime21.jpg'



const arrayOfImages = [anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8, anime9, anime10, anime11, anime12, anime13, anime14, anime15, anime16, anime17, anime18, anime19, anime20, anime21]

const arrayOfJSX = arrayOfImages.map((imageString, i) => {
  return (
    <div className="flex flex-col items-center justify-center" key={i+1}>
      <img
      src={imageString}
      alt={`anime poster - ${i + 1}`}
      className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
      />
    </div>
  )
})



export const Anime = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">ANIME</h2>
      </div>

      <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">

        {arrayOfJSX}
        
      </div>

    </div>
  )
}