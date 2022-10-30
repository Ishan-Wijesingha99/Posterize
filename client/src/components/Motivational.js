import React, {useEffect} from "react";

import motivational1 from '../images/posters/motivational/motivational1.jpg'
import motivational2 from '../images/posters/motivational/motivational2.jpg'
import motivational3 from '../images/posters/motivational/motivational3.jpg'
import motivational4 from '../images/posters/motivational/motivational4.jpg'
import motivational5 from '../images/posters/motivational/motivational5.jpg'
import motivational6 from '../images/posters/motivational/motivational6.jpg'
import motivational7 from '../images/posters/motivational/motivational7.jpg'
import motivational8 from '../images/posters/motivational/motivational8.jpg'
import motivational9 from '../images/posters/motivational/motivational9.jpg'
import motivational10 from '../images/posters/motivational/motivational10.jpg'
import motivational11 from '../images/posters/motivational/motivational11.jpg'
import motivational12 from '../images/posters/motivational/motivational12.png'
import motivational13 from '../images/posters/motivational/motivational13.jpg'
import motivational14 from '../images/posters/motivational/motivational14.jpg'
import motivational15 from '../images/posters/motivational/motivational15.jpg'
import motivational16 from '../images/posters/motivational/motivational16.jpg'
import motivational17 from '../images/posters/motivational/motivational17.jpg'
import motivational18 from '../images/posters/motivational/motivational18.jpg'
import motivational19 from '../images/posters/motivational/motivational19.jpg'
import motivational20 from '../images/posters/motivational/motivational20.jpg'
import motivational21 from '../images/posters/motivational/motivational21.jpg'




const arrayOfImages = [motivational1, motivational2, motivational3, motivational4, motivational5, motivational6, motivational7, motivational8, motivational9, motivational10, motivational11, motivational12, motivational13, motivational14, motivational15, motivational16, motivational17, motivational18, motivational19, motivational20, motivational21]

const arrayOfJSX = arrayOfImages.map((imageString, i) => {
  return (
    <div className="flex flex-col items-center justify-center" key={i+1}>
      <img
      src={imageString}
      alt={`motivational poster - ${i + 1}`}
      className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
      />
    </div>
  )
})



export const Motivational = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">MOTIVATIONAL</h2>
      </div>

      <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">

        {arrayOfJSX}
        
      </div>

    </div>
  )
}