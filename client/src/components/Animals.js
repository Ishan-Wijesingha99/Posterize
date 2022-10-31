import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'

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



const arrayOfImages = [
  {
    imgString: animals1,
    price: '34.99'
  }, 
  {
    imgString: animals2,
    price: '34.99'
  }, 
  {
    imgString: animals3,
    price: '39.99'
  }, 
  {
    imgString: animals4,
    price: '34.99'
  }, 
  {
    imgString: animals5,
    price: '39.99'
  }, 
  {
    imgString: animals6,
    price: '34.99'
  }, 
  {
    imgString: animals7,
    price: '34.99'
  }, 
  {
    imgString: animals8,
    price: '34.99'
  }, 
  {
    imgString: animals9,
    price: '34.99'
  }, 
  {
    imgString: animals10,
    price: '39.99'
  }, 
  {
    imgString: animals11,
    price: '34.99'
  }, 
  {
    imgString: animals12,
    price: '34.99'
  }, 
  {
    imgString: animals13,
    price: '34.99'
  }, 
  {
    imgString: animals14,
    price: '39.99'
  }, 
  {
    imgString: animals15,
    price: '39.99'
  }, 
  {
    imgString: animals16,
    price: '34.99'
  }, 
  {
    imgString: animals17,
    price: '39.99'
  }, 
  {
    imgString: animals18,
    price: '34.99'
  }, 
  {
    imgString: animals19,
    price: '39.99'
  }, 
  {
    imgString: animals20,
    price: '34.99'
  }, 
  {
    imgString: animals21,
    price: '34.99'
  }
]



export const Animals = () => {
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
        alt={`animals poster - ${i + 1}`}
        className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
        id={`animals-poster-${i}`}
        onClick={posterClickEvent}
        />
      </div>
    )
  })



  return (
    <div className="min-h-screen mb-24">
      
      {
      singlePoster ? (

        <div>

          <button
          className="bg-green-600 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl w-full mt-12 text-black w-[250px] ml-12"
          onClick={() => {
            setSinglePoster(false)
            setPosterElementObject({
              price: '',
              src: ''
            })
          }}
          >
            Back to Search Results
          </button>

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
        </div>

      ) : (

        <div>
          <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
            <h2 className="font-silkscreen font-extrabold text-6xl">ANIMALS</h2>
          </div>

          <div className="grid grid-cols-3 gap-12 justify-items-center mx-8 my-16">
            {arrayOfJSX}
          </div>
        </div>

      )
      }

      <div className="flex flex-row items-center justify-center py-8 bg-gray-600 mx-4 border-2 border-black rounded-lg mt-32">
        <Link 
        to="/sport"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          SPORT
        </Link>

        <Link
        to="/artandnature"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ART AND NATURE
        </Link>

        <Link
        to="/motivational"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          MOTIVATIONAL
        </Link>

        <Link
        to="/movies"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          MOVIES
        </Link>

        <Link
        to="/anime"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ANIME
        </Link>
      </div>

    </div>
  )
}