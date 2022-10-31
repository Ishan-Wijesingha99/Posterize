import React, {useEffect} from "react";
import { Link } from 'react-router-dom'



export const ShippingAndReturns = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-col items-center justify-center py-8 pb-4 pt-8 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">

        <h2 className="text-3xl text-gray-300 font-silkscreen w-3/4 text-center mb-16">Shipping and Returns Policy</h2>

        <p className="text-2xl text-gray-300 w-3/4 text-justify font-silkscreen mb-4">Our Guarantee</p>

        <p className="text-xl text-gray-300 w-3/4 text-justify">If you aren't 100% satisfied with your order, we will give you a full refund, no questions asked!</p>

        <p className="text-xl text-gray-300 w-3/4 text-justify mb-12">We want you to be filled with joy when you receive a poster from us, if for some reason you aren't, then please contact us! We'll fix it.</p>
        
        <p className="text-2xl text-gray-300 w-3/4 text-justify font-silkscreen mb-4">Shipping</p>

        <p className="text-xl text-gray-300 w-3/4 text-justify mb-12">For orders being shipped to metro areas, the expected delivery time is 3-4 business days, for non-metro areas it is 6-7 business days. Every parcel that is shipped is given a unique tracking number. You can use this number to track the order with one of the couriers we've partnered with.</p>

        <p className="text-2xl text-gray-300 w-3/4 text-justify font-silkscreen mb-4">Return Policy</p>


        <p className="text-xl text-gray-300 w-3/4 text-justify mb-12">You may return an order or part of an order within 90 days of delivery and you will receive a full 100% refund. The return cost of shipping must be covered by the customer, but the original cost of shipping will be refunded to you as well. Please write down your full shipping details on the package which includes your order number. Also include a note with your order number inside of the package.</p>

        <p className="text-2xl text-gray-300 w-3/4 text-justify font-silkscreen mb-4">The return address is:</p>
        <p className="text-xl text-gray-300 w-3/4 text-justify mb-12">32/11 Fake Avenue Richmond 3121 Victoria</p>

      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center py-8 bg-gray-600 mx-4 border-2 border-black rounded-lg mt-32">
        <Link 
        to="/sport"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4 my-4 lg:my-0"
        >
          SPORT
        </Link>

        <Link 
        to="/artandnature"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4 my-4 lg:my-0"
        >
          ART AND NATURE
        </Link>

        <Link
        to="/motivational"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4 my-4 lg:my-0"
        >
          MOTIVATIONAL
        </Link>

        <Link
        to="/movies"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4 my-4 lg:my-0"
        >
          MOVIES
        </Link>

        <Link
        to="/anime"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4 my-4 lg:my-0"
        >
          ANIME
        </Link>

        <Link
        to="/animals"
        className="bg-green-600 px-4 py-3 rounded-lg hover:scale-105 duration-200 border-2 border-black text-black mx-4 my-4 lg:my-0"
        >
          ANIMALS
        </Link>
      </div>
      
    </div>
  )
}