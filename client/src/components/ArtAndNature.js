import React, {useEffect, useState} from "react";

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



const arrayOfImages = [
  {
    imgString: artAndNature1,
    price: '44.99'
  },
  {
    imgString: artAndNature2,
    price: '39.99'
  },
  {
    imgString: artAndNature3,
    price: '49.99'
  },
  {
    imgString: artAndNature4,
    price: '39.99'
  },
  {
    imgString: artAndNature5,
    price: '44.99'
  },
  {
    imgString: artAndNature6,
    price: '49.99'
  },
  {
    imgString: artAndNature7,
    price: '39.99'
  },
  {
    imgString: artAndNature8,
    price: '49.99'
  },
  {
    imgString: artAndNature9,
    price: '44.99'
  },
  {
    imgString: artAndNature10,
    price: '44.99'
  },
  {
    imgString: artAndNature11,
    price: '44.99'
  },
  {
    imgString: artAndNature12,
    price: '39.99'
  },
  {
    imgString: artAndNature13,
    price: '44.99'
  },
  {
    imgString: artAndNature14,
    price: '39.99'
  },
  {
    imgString: artAndNature15,
    price: '39.99'
  },
  {
    imgString: artAndNature16,
    price: '39.99'
  },
  {
    imgString: artAndNature17,
    price: '44.99'
  },
  {
    imgString: artAndNature18,
    price: '39.99'
  },
  {
    imgString: artAndNature19,
    price: '49.99'
  },
  {
    imgString: artAndNature20,
    price: '44.99'
  },
  {
    imgString: artAndNature21,
    price: '49.99'
  }
]



export const ArtAndNature = () => {
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
        alt={`art and nature poster - ${i + 1}`}
        className="border-black border-2 shadow-lg shadow-gray-800 transition ease-out hover:scale-105 duration-200 cursor-pointer"
        id={`artandnature-poster-${i}`}
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
            <h2 className="font-silkscreen font-extrabold text-6xl">ART AND NATURE</h2>
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