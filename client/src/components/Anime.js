import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'

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



const arrayOfImages = [
  {
    imgString: anime1,
    price: '49.99'
  }, 
  {
    imgString: anime2,
    price: '49.99'
  }, 
  {
    imgString: anime3,
    price: '39.99'
  }, 
  {
    imgString: anime4,
    price: '49.99'
  }, 
  {
    imgString: anime5,
    price: '49.99'
  }, 
  {
    imgString: anime6,
    price: '39.99'
  }, 
  {
    imgString: anime7,
    price: '39.99'
  }, 
  {
    imgString: anime8,
    price: '39.99'
  }, 
  {
    imgString: anime9,
    price: '49.99'
  }, 
  {
    imgString: anime10,
    price: '49.99'
  },
  {
    imgString: anime11,
    price: '49.99'
  },
  {
    imgString: anime12,
    price: '39.99'
  },
  {
    imgString: anime13,
    price: '39.99'
  },
  {
    imgString: anime14,
    price: '39.99'
  },
  {
    imgString: anime15,
    price: '49.99'
  },
  {
    imgString: anime16,
    price: '49.99'
  },
  {
    imgString: anime17,
    price: '39.99'
  },
  {
    imgString: anime18,
    price: '39.99'
  },
  {
    imgString: anime19,
    price: '49.99'
  },
  {
    imgString: anime20,
    price: '49.99'
  },
  {
    imgString: anime21,
    price: '49.99'
  }
]



export const Anime = () => {
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
        alt={`anime poster - ${i + 1}`}
        className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
        id={`anime-poster-${i}`}
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
            <h2 className="font-silkscreen font-extrabold text-6xl">ANIME</h2>
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
        to="/animals"
        className="bg-green-600 px-6 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4"
        >
          ANIMALS
        </Link>
      </div>

    </div>
  )
}