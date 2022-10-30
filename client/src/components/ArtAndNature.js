import React, {useEffect} from "react";

import artAndNature1 from '../images/posters/artAndNature/artandnature1.jpg'
import artAndNature2 from '../images/posters/artAndNature/artandnature2.jpg'
import artAndNature3 from '../images/posters/artAndNature/artandnature3.jpg'
import artAndNature4 from '../images/posters/artAndNature/artandnature4.jpg'
import artAndNature5 from '../images/posters/artAndNature/artandnature5.jpg'
import artAndNature6 from '../images/posters/artAndNature/artandnature6.jpg'
import artAndNature7 from '../images/posters/artAndNature/artandnature7.jpg'
import artAndNature8 from '../images/posters/artAndNature/artandnature8.jpg'
import artAndNature9 from '../images/posters/artAndNature/artandnature9.png'
import artAndNature10 from '../images/posters/artAndNature/artandnature10.jpg'
import artAndNature11 from '../images/posters/artAndNature/artandnature11.jpg'
import artAndNature12 from '../images/posters/artAndNature/artandnature12.jpg'
import artAndNature13 from '../images/posters/artAndNature/artandnature13.jpg'
import artAndNature14 from '../images/posters/artAndNature/artandnature14.jpg'
import artAndNature15 from '../images/posters/artAndNature/artandnature15.jpg'
import artAndNature16 from '../images/posters/artAndNature/artandnature16.jpg'
import artAndNature17 from '../images/posters/artAndNature/artandnature17.jpg'
import artAndNature18 from '../images/posters/artAndNature/artandnature18.jpg'
import artAndNature19 from '../images/posters/artAndNature/artandnature19.jpg'
import artAndNature20 from '../images/posters/artAndNature/artandnature20.jpg'
import artAndNature21 from '../images/posters/artAndNature/artandnature21.jpg'




const arrayOfImages = [artAndNature1, artAndNature2, artAndNature3, artAndNature4, artAndNature5, artAndNature6, artAndNature7, artAndNature8, artAndNature9, artAndNature10, artAndNature11, artAndNature12, artAndNature13, artAndNature14, artAndNature15, artAndNature16, artAndNature17, artAndNature18, artAndNature19, artAndNature20, artAndNature21]

const arrayOfJSX = arrayOfImages.map((imageString, i) => {
  return (
    <div className="flex flex-col items-center justify-center" key={i+1}>
      <img
      src={imageString}
      alt={`art and nature poster - ${i + 1}`}
      className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
      />
    </div>
  )
})



export const ArtAndNature = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">ART AND NATURE</h2>
      </div>

      <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">

        {arrayOfJSX}
        
      </div>

    </div>
  )
}