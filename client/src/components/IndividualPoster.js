import React from "react";
import posterPic from '../images/posters/art and nature/artandnature1.jpg'


export const IndividualPoster = () => {
  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-row items-center justify-center">
        <div>
          <img
          src={posterPic}
          alt=""
          className="w-[300px] mr-8"
          />
        </div>

        <div className="bg-gray-600 py-8 px-8 border-2 border-black rounded-lg text-gray-300 ml-8">
          <p className="font-silkscreen text-2xl mb-6">Poster Name</p>
          
          <p className="text-2xl mb-6">$A39.99</p>
          
          <label htmlFor="sizeOptions">Size</label>
          <br />
          <select 
            id="sizeOptions"
            name="sizeOptions"
          >
            <option value="">-- Choose --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <br />  

          <button>add to cart</button>

          <p>delivery details</p>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}