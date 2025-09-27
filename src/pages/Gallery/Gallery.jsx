import React from 'react'

export default function Gallery() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center my-5">
      <p className='text-lg text-gray-400'>Belive in your Potential</p>
      <h1 className='text-4xl text-green-500 font-semibold'>Ambience of Sampath Academy</h1>
      <p className='text-lg text-gray-400'>Each result is more than a number — it’s a story of hard work, growth, and dedication.</p>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="grid h-full w-full gap-4 p-2 grid-cols-4 grid-rows-7 rounded-lg shadow-md">
          
          <div className="col-span-2 row-span-1 rounded-lg shadow-md overflow-hidden">
            <img 
              src="/Gallery-3.jpg" 
              alt="Salmon" 
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-2 row-span-1 rounded-lg shadow-md overflow-hidden">
            <img 
              src="/Gallery-1.jpg" 
              alt="Broccoli" 
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-1 row-span-4 rounded-lg shadow-md overflow-hidden">
            <img 
              src="/Gallery-3.jpg" 
              alt="Tamago" 
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-2 row-span-4 rounded-lg shadow-md overflow-hidden">
            <img 
              src="/Gallery-2.jpg" 
              alt="Pork" 
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-1 row-span-4 rounded-lg shadow-md overflow-hidden">
            <img 
              src="/Gallery-1.jpg" 
              alt="Edamame" 
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-4 row-span-4 rounded-lg shadow-md overflow-hidden">
            <img 
              src="/Gallery-1.jpg" 
              alt="Tomato" 
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
