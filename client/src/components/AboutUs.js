import React, {useEffect} from "react";


export const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen my-24">
      <div className="flex flex-col items-center justify-center py-8 pb-4 pt-8 bg-gray-600 w-3/4 mx-auto border-2 border-black rounded-lg">

        <h2 className="text-3xl mb-12 text-gray-300 font-silkscreen w-3/4 text-center">About Us</h2>

        <p className="text-xl mb-12 text-gray-300 w-3/4 text-justify">Everyone loves posters. Why? Because a poster allows us to express ourselves; what we like, what we believe, who we are. 
        </p>

        <p className="text-xl mb-12 text-gray-300 w-3/4 text-justify">Our mission was simple, create a platform where people can choose from a diverse array of posters to buy, and then be delivered those posters in a timely and conveniant fashion.</p>

        <p className="text-xl mb-12 text-gray-300 w-3/4 text-justify">Posterize is constantly looking to add more and more posters to our website for our customers to buy.</p>



      </div>
    </div>
  )
}