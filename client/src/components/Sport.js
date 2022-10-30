import React, {useEffect} from "react";

import sport1 from '../images/posters/sport/sport1.png'
import sport2 from '../images/posters/sport/sport2.jpg'
import sport3 from '../images/posters/sport/sport3.jpg'
import sport4 from '../images/posters/sport/sport4.jpg'
import sport5 from '../images/posters/sport/sport5.jpg'
import sport6 from '../images/posters/sport/sport6.jpg'
import sport7 from '../images/posters/sport/sport7.jpg'
import sport8 from '../images/posters/sport/sport8.jpg'
import sport9 from '../images/posters/sport/sport9.jpg'
import sport10 from '../images/posters/sport/sport10.png'
import sport11 from '../images/posters/sport/sport11.jpg'
import sport12 from '../images/posters/sport/sport12.jpg'
import sport13 from '../images/posters/sport/sport13.jpg'
import sport14 from '../images/posters/sport/sport14.jpg'
import sport15 from '../images/posters/sport/sport15.jpg'
import sport16 from '../images/posters/sport/sport16.jpg'
import sport17 from '../images/posters/sport/sport17.jpg'
import sport18 from '../images/posters/sport/sport18.jpg'
import sport19 from '../images/posters/sport/sport19.jpg'
import sport20 from '../images/posters/sport/sport20.jpg'



let arrayOfImages = []

for(let i = 0; i <= 20; i++) {

}


export const Sport = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">SPORT</h2>
      </div>

      <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">
        <div className="flex flex-col items-center justify-center">
          <img
          src={sport1}
          alt=""
          className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200"
          />
        </div>
       

        <div className="flex flex-col items-center justify-center">
          <img
          src={sport2}
          alt=""
          className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
          src={sport3}
          alt=""
          className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
          src={sport4}
          alt=""
          className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200"
          />
        </div>
        
      </div>
    </div>
  )
}