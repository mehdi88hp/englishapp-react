import React from 'react'
import Image from 'next/image'

export default function ProfileWidget() {
    return (
        <div className='border-2 items-center border-base-200 rounded-xl h-20 flex gap-4 px-4 my-8'>
            <div className='w-9 relative h-9 rounded-md overflow-hidden border-2 border-base-100 shadow-sm'>
                <Image
                    src={"/png/sidebar/profile.png"}
                    alt={"iconImage"}
                    objectFit={"contain"}
                    layout={"fill"}
                />
            </div>
            <div className='flex-col'>
                <p className='text-base-content text-sm'>Hossein HP</p>
                <p className='text-base-200 text-xs'>Hosseinhp@gmail.om</p>
            </div>
        </div>
    )
}
