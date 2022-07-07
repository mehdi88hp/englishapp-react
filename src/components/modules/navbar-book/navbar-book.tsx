import React from 'react'
import requests from '../../../../utils/requests'
import { useRouter } from 'next/router'

export default function NavbarBook() {
    const router = useRouter();

    return (
        // <div className='relative flex justify-center items-center h-10 px-8 py-1 mb-9'>
        //     <nav className='relative z-10 '>
        //         <a className='flex flex-col items-start my-1 mx-0 leading-none relative outline-hidden group' href='#'>
        //             <span className='overflow-hidden py-0 px-1 before:absolute before:top-0 before:left-0
        //         before:w-full before:h-full before:bg-secondary before:-translate-x-full before:transition-transform
        //         	before:duration-700 after:absolute after:left-0 after:w-full 
        //             after:bg-secondary after:-translate-x-full after:transition-transform	
        //             after:duration-700 group-hover:before:translate-x-full after:top-[calc(100%+0.1rem)] after:h-1
        //             group-hover:after:translate-x-0 text-2xl' >Artist</span>
        //         </a> 
        //     </nav>
        // </div>
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        key={key}
                        onClick={()=>router.push(`/?genre=${key}`)}
                        className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 active:text-secondary">
                        {title}
                    </h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-tr from-base-100 h-10 w-1/12' />
        </nav>
    )
}
