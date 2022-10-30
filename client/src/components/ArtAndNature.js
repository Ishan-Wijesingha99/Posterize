import React, {useEffect} from "react";


export const ArtAndNature = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen mb-24">
      <div className="flex flex-col items-center justify-center h-[400px] bg-gray-600 border-b-2 border-black">
        <h2 className="font-silkscreen font-extrabold text-6xl">ART AND NATURE</h2>
      </div>
    </div>
  )
}