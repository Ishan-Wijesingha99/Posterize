import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'

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



const arrayOfImages = [
  {
    imgString: movies1,
    price: '49.99'
  },
  {
    imgString: movies2,
    price: '49.99'
  },
  {
    imgString: movies3,
    price: '39.99'
  },
  {
    imgString: movies4,
    price: '54.99'
  },
  {
    imgString: movies5,
    price: '49.99'
  },
  {
    imgString: movies6,
    price: '49.99'
  },
  {
    imgString: movies7,
    price: '49.99'
  },
  {
    imgString: movies8,
    price: '39.99'
  },
  {
    imgString: movies9,
    price: '49.99'
  },
  {
    imgString: movies10,
    price: '39.99'
  }, 
  {
    imgString: movies11,
    price: '39.99'
  }, 
  {
    imgString: movies12,
    price: '49.99'
  }, 
  {
    imgString: movies13,
    price: '39.99'
  }, 
  {
    imgString: movies14,
    price: '39.99'
  }, 
  {
    imgString: movies15,
    price: '39.99'
  }, 
  {
    imgString: movies16,
    price: '54.99'
  }, 
  {
    imgString: movies17,
    price: '39.99'
  }, 
  {
    imgString: movies18,
    price: '39.99'
  }, 
  {
    imgString: movies19,
    price: '39.99'
  }, 
  {
    imgString: movies20,
    price: '39.99'
  }, 
  {
    imgString: movies21,
    price: '39.99'
  }
]



export const Movies = () => {
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
        alt={`movies poster - ${i + 1}`}
        className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
        id={`movies-poster-${i}`}
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
            <h2 className="font-silkscreen font-extrabold text-6xl">MOVIES</h2>
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
        to="/anime"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ANIME
        </Link>

        <Link
        to="/animals"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ANIMALS
        </Link>
      </div>

    </div>
  )
}