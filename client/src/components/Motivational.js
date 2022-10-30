import React, {useEffect, useState} from "react";

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



const arrayOfImages = [
  {
    imgString: motivational1,
    price: '39.99'
  },
  {
    imgString: motivational2,
    price: '39.99'
  },
  {
    imgString: motivational3,
    price: '39.99'
  },
  {
    imgString: motivational4,
    price: '49.99'
  },
  {
    imgString: motivational5,
    price: '49.99'
  },
  {
    imgString: motivational6,
    price: '49.99'
  },
  {
    imgString: motivational7,
    price: '39.99'
  },
  {
    imgString: motivational8,
    price: '49.99'
  },
  {
    imgString: motivational9,
    price: '39.99'
  },
  {
    imgString: motivational10,
    price: '49.99'
  }, 
  {
    imgString: motivational11,
    price: '49.99'
  }, 
  {
    imgString: motivational12,
    price: '39.99'
  }, 
  {
    imgString: motivational13,
    price: '44.99'
  }, 
  {
    imgString: motivational14,
    price: '39.99'
  }, 
  {
    imgString: motivational15,
    price: '49.99'
  }, 
  {
    imgString: motivational16,
    price: '44.99'
  }, 
  {
    imgString: motivational17,
    price: '49.99'
  }, 
  {
    imgString: motivational18,
    price: '44.99'
  }, 
  {
    imgString: motivational19,
    price: '44.99'
  }, 
  {
    imgString: motivational20,
    price: '44.99'
  }, 
  {
    imgString: motivational21,
    price: '49.99'
  }
]



export const Motivational = () => {
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
        alt={`motivational poster - ${i + 1}`}
        className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
        id={`motivational-poster-${i}`}
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
            <p className="text-2xl mb-6">$ {posterElementObject.price}</p>
            
            <button className="bg-green-600 px-6 py-3 mx-auto rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl w-full text-center mb-6 text-black">Add to Cart</button>
          </div>
        </div>

      ) : (

        <div>
          <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
            <h2 className="font-silkscreen font-extrabold text-6xl">MOTIVATIONAL</h2>
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