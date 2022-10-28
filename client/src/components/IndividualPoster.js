import React from "react";
import singlePoster from '../images/posters/art and nature/artandnature1.jpg'


export const IndividualPoster = () => {
  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-row items-center justify-center">
        <img
        src={singlePoster}
        alt=""
        className="w-[300px] mr-8 border-2 border-black rounded-lg"
        />

        <div className="bg-gray-600 py-8 px-8 border-2 border-black rounded-lg text-gray-300 ml-8 max-w-[400px]">
          <p className="font-silkscreen text-2xl mb-6">Poster Name</p>
          
          <p className="text-2xl mb-6">$A39.99</p>
          
          <button className="bg-green-600 px-6 py-3 mx-auto rounded-lg hover:scale-105 duration-200 border-2 border-black text-xl w-full text-center mb-6 text-black">Add to Cart</button>

          <p className="text-2xl mb-3">Poster Details</p>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil sunt explicabo modi enim similique accusantium iusto possimus deserunt adipisci.</p>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}