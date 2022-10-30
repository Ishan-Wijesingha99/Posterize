import React, {useEffect} from "react";
import singlePoster from '../images/posters/art and nature/artandnature1.jpg'

import { authenticateToken } from '../utils/AuthenticateToken'



export const SavedPage = ({loggedIn, setLoggedIn}) => {

  useEffect(() => {

    const trueOrFalse = authenticateToken()

    setLoggedIn(trueOrFalse)

    window.scrollTo(0, 0)
    
  }, [])

  

  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-col items-center justify-center py-8 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">

        <p className="text-3xl my-4 text-gray-300 font-silkscreen w-3/4 text-center">Saved Items: 2</p>

        <div className="flex flex-row items-center justify-between w-5/6 p-8 bg-gray-300 border-2 border-black rounded-lg mt-8">
          <img
          src={singlePoster}
          alt="cart poster icon" 
          className="h-[250px] border-2 border-black rounded-lg"
          />

          <div>
            <p className="font-silkscreen text-xl mb-6">Poster Name</p>

            <p className="text-2xl mb-6">Price: A$39.99</p>

            <button className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl w-full">Add to Cart</button>

          </div>
        </div>



        <div className="flex flex-row items-center justify-between w-5/6 p-8 bg-gray-300 border-2 border-black rounded-lg mt-8">
          <img
          src={singlePoster}
          alt="cart poster icon" 
          className="h-[250px] border-2 border-black rounded-lg"
          />

          <div>
            <p className="font-silkscreen text-xl mb-6">Poster Name</p>

            <p className="text-2xl mb-6">Price: A$39.99</p>

            <button className="bg-green-600 px-6 py-3 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl w-full">Add to Cart</button>

          </div>
        </div>

      </div>

    </div>
  )
}