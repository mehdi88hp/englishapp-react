import React from 'react'
import Image from 'next/image'

export default function Search() {
  return (
    <div className='relative '>
      <div className='w-full border-2 border-neutral rounded-2xl h-15 relative flex flex-row overflow-hidden z-10 bg-base-100'>
        <div className='w-16 bg-info-content h-15 border-neutral border-r-2 justify-center items-center flex rounded-l-2xl'>
          <div className='relative w-6 h-6'>
            <Image
              src={"/svg/search.svg"}
              alt={"iconImage"}
              objectFit={"contain"}
              layout={"fill"}
            />
          </div>
        </div>
        <input type="text" placeholder="Search book, AudioBooks ..." className="font-avenir text-base-content placeholder:text-base-content text-sm font-medium w-11/12 flex-none relative z-10 input focus:outline-none" />
      </div>
      <div className='flex-none w-full mb-10 absolute t border-2 border-neutral rounded-2xl h-15 top-2 left-2 bg-secondary'>
      </div>
    </div>
  )
}