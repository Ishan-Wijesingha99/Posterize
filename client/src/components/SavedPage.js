import React, {useEffect} from "react";

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
      </div>

    </div>
  )
}