import React, {useEffect, useState} from "react";

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
import sport21 from '../images/posters/sport/sport21.jpg'



const arrayOfImages = [
  {
    imgString: sport1,
    price: '39.99'
  }, 
  {
    imgString: sport2,
    price: '44.99'
  }, 
  {
    imgString: sport3,
    price: '39.99'
  }, 
  {
    imgString: sport4,
    price: '44.99'
  }, 
  {
    imgString: sport5,
    price: '39.99'
  }, 
  {
    imgString: sport6,
    price: '39.99'
  }, 
  {
    imgString: sport7,
    price: '39.99'
  }, 
  {
    imgString: sport8,
    price: '44.99'
  }, 
  {
    imgString: sport9,
    price: '39.99'
  }, 
  {
    imgString: sport10,
    price: '44.99'
  }, 
  {
    imgString: sport11,
    price: '44.99'
  }, 
  {
    imgString: sport12,
    price: '39.99'
  }, 
  {
    imgString: sport13,
    price: '44.99'
  }, 
  {
    imgString: sport14,
    price: '39.99'
  }, 
  {
    imgString: sport15,
    price: '44.99'
  }, 
  {
    imgString: sport16,
    price: '44.99'
  },
  {
    imgString: sport17,
    price: '39.99'
  },
  {
    imgString: sport18,
    price: '49.99'
  },
  {
    imgString: sport19,
    price: '39.99'
  },
  {
    imgString: sport20,
    price: '49.99'
  },
  {
    imgString: sport21,
    price: '39.99'
  }
]



export const Sport = () => {
  const [singlePoster, setSinglePoster] = useState(false)
  const [posterElementObject, setPosterElementObject] = useState({
    price: '',
    src: ''
  })



  const posterClickEvent = (event) => {
  
    const idString = event.target.id

    const index = idString.split('-')[2]

    setPosterElementObject({
      price: arrayOfImages[index].price,
      src: arrayOfImages[index].imgString
    })
  
    // set page to render a single poster
    setSinglePoster(true)

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const arrayOfJSX = arrayOfImages.map((object, i) => {
    return (
      <div className="flex flex-col items-center justify-center" key={i+1}>
        <img
        src={object.imgString}
        alt={`sport poster - ${i + 1}`}
        className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
        id={`sport-poster-${i}`}
        onClick={posterClickEvent}
        />
      </div>
    )
  })

  return (
    <div className="min-h-screen mb-24">
      
      {
      singlePoster ? (

        <div className="flex flex-row items-center justify-center mt-32">
          <img
          src={posterElementObject.src}
          alt="single poster image"
          className="w-[300px] mr-8 border-2 border-black shadow-lg shadow-gray-800"
          />

          <div className="bg-gray-600 py-8 px-8 border-2 border-black rounded-lg text-gray-300 ml-8 max-w-[400px]">
            <p className="text-2xl mb-6">$A {posterElementObject.price}</p>
            
            <button className="bg-green-600 px-6 py-3 mx-auto rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl w-full text-center mb-6 text-black">Add to Cart</button>
          </div>
        </div>

      ) : (

        <div>
          <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
            <h2 className="font-silkscreen font-extrabold text-6xl">SPORT</h2>
          </div>

          <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">
            {arrayOfJSX}
          </div>
        </div>

      )
      }

    </div>
  )
}