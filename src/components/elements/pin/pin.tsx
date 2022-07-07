import React from 'react'

export default function Pin() {
    return (
        <div className='absolute flex flex-col items-center gap-4 left-1/2 -top-5'>
            <div className='w-4 h-4 border-2 border-white rounded-full bg-black'></div>
            <div className='w-1 h-9 bg-white border border-neutral rounded-xl absolute top-1.5'></div>
            <div className='w-4 h-4 border-2 border-white rounded-full bg-black'></div>
        </div>
    )
}
