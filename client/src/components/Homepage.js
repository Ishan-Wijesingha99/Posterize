import React, {useEffect} from "react";

import { authenticateToken } from '../utils/AuthenticateToken'

export const Homepage = ({loggedIn, setLoggedIn}) => {
  
  useEffect(() => {

    const trueOrFalse = authenticateToken()

    setLoggedIn(trueOrFalse)
    
  }, [])


  return (
    <div className="min-h-screen mb-16">

      {loggedIn && (
        <div id="loggedInHomepageDiv">
          <h3 id="loggedInHomepage">
            You are logged in
          </h3>
        </div>
      )}



      <h2 className="text-3xl font-silkscreen font-extrabold text-center my-16">Browse Poster Categories!</h2>

      <div className="grid grid-rows-3 grid-cols-2 gap-24 justify-items-center align-middle">

        <a href="" className="justify-self-end transition ease-out hover:scale-105 duration-200">
          <div className="w-[250px] h-[250px] bg-gray-600 border-2 border-black rounded-lg flex flex-col items-center justify-center">
            <p className="font-silkscreen font-extrabold text-xl">Sport</p>
          </div>
        </a>
        
        <a href="" className="justify-self-start transition ease-out hover:scale-105 duration-200">
          <div className="w-[250px] h-[250px] bg-gray-600 border-2 border-black rounded-lg flex flex-col items-center justify-center">
            <p className="font-silkscreen font-extrabold text-xl">Art and Nature</p>
          </div>
        </a>
        
        <a href="" className="justify-self-end transition ease-out hover:scale-105 duration-200">
          <div className="w-[250px] h-[250px] bg-gray-600 border-2 border-black rounded-lg flex flex-col items-center justify-center">
            <p className="font-silkscreen font-extrabold text-xl">Motivational</p>
          </div>
        </a>
        
        <a href="" className="justify-self-start transition ease-out hover:scale-105 duration-200">
          <div className="w-[250px] h-[250px] bg-gray-600 border-2 border-black rounded-lg flex flex-col items-center justify-center">
            <p className="font-silkscreen font-extrabold text-xl">Movies</p>
          </div>
        </a>
        
        <a href="" className="justify-self-end transition ease-out hover:scale-105 duration-200">
          <div className="w-[250px] h-[250px] bg-gray-600 border-2 border-black rounded-lg flex flex-col items-center justify-center">
            <p className="font-silkscreen font-extrabold text-xl">Anime</p>
          </div>
        </a>

        <a href="" className="justify-self-start transition ease-out hover:scale-105 duration-200">
          <div className="w-[250px] h-[250px] bg-gray-600 border-2 border-black rounded-lg flex flex-col items-center justify-center">
            <p className="font-silkscreen font-extrabold text-xl">Animals</p>
          </div>
        </a>
      </div>
    </div>
  )
}