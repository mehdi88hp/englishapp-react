import Image from 'next/image'
import React, { useState } from 'react'
import { ColorExtractor } from "react-color-extractor";
import { Pin } from '../../elements';

interface props {
    title: string,
    src: string,
    duration: string
}

export default function BookCard({ title, src, duration }: props) {
    const [imageColor, setImageColor] = useState()
    return (
        <div className='relative w-46 z-20'>
            <div className='flex flex-col relative p-2.5 border-2 border-neutral rounded-2xl bg-base-100'>
                <div>
                    <div className='relative w-full h-60 rounded-2xl overflow-hidden'>
                        <Image
                            src={src}
                            alt={"book something"}
                            objectFit={"cover"}
                            layout={"fill"}
                        />
                    </div>
                </div>
                <div>
                    <div className='flex flex-row justify-between items-center pt-1 px-1 pb-3.5'>
                        <p>{duration}</p>
                        <div className='w-4 relative h-4'>
                            <Image
                                src={"/svg/book2.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                    </div>
                    <div className='h-12'>
                        <p className='font-bold'>{title}</p>
                    </div>
                </div>

            </div>
            <Pin />

            <ColorExtractor
                src={src}
                getColors={colors => setImageColor(colors[0])}
            />
            <div className='flex-none w-full -bottom-2 -z-10 absolute border-2 border-neutral rounded-2xl h-15' style={{ backgroundColor: imageColor }}>
            </div>
        </div>
    )
}
