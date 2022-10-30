import React, {useEffect} from "react";

import animals1 from '../images/posters/animals/animals1.jpg'
import animals2 from '../images/posters/animals/animals2.jpg'
import animals3 from '../images/posters/animals/animals3.jpg'
import animals4 from '../images/posters/animals/animals4.jpg'
import animals5 from '../images/posters/animals/animals5.jpg'
import animals6 from '../images/posters/animals/animals6.jpg'
import animals7 from '../images/posters/animals/animals7.jpg'
import animals8 from '../images/posters/animals/animals8.jpg'
import animals9 from '../images/posters/animals/animals9.jpg'
import animals10 from '../images/posters/animals/animals10.jpg'
import animals11 from '../images/posters/animals/animals11.jpg'
import animals12 from '../images/posters/animals/animals12.jpg'
import animals13 from '../images/posters/animals/animals13.jpg'
import animals14 from '../images/posters/animals/animals14.jpg'
import animals15 from '../images/posters/animals/animals15.jpg'
import animals16 from '../images/posters/animals/animals16.jpg'
import animals17 from '../images/posters/animals/animals17.jpg'
import animals18 from '../images/posters/animals/animals18.jpg'
import animals19 from '../images/posters/animals/animals19.jpg'
import animals20 from '../images/posters/animals/animals20.jpg'
import animals21 from '../images/posters/animals/animals21.jpg'



const arrayOfImages = [animals1, animals2, animals3, animals4, animals5, animals6, animals7, animals8, animals9, animals10, animals11, animals12, animals13, animals14, animals15, animals16, animals17, animals18, animals19, animals20, animals21]

const arrayOfJSX = arrayOfImages.map((imageString, i) => {
  return (
    <div className="flex flex-col items-center justify-center" key={i+1}>
      <img
      src={imageString}
      alt={`Animals poster - ${i + 1}`}
      className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
      />
    </div>
  )
})



export const Animals = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">ANIMALS</h2>
      </div>

      <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">

        {arrayOfJSX}
        
      </div>

    </div>
  )
}