import Image from 'next/image'
import React from 'react'
import { ProfileWidget } from '../../components/elements'

interface props {
    currentPage: string
}

export default function Sidebar({ currentPage }: props) {
    return (
        <div className='w-72 flex flex-col h-not-full fixed border-2 border-neutral rounded-2xl my-3 px-5 font-avenir font-medium'>
            {/* ----------Profile------------- */}
            <ProfileWidget />

            {/* ----------MENU NAVIGATION------------- */}
            <div>
                {/* ----------HOME------------- */}
                {currentPage === "home"
                    ? <div className='flex gap-6 items-center bg-primary rounded-xl h-15 px-6 border-2 border-neutral mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/png/sidebar/home.png"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-primary-content'>Home</p>
                    </div>
                    : <div className='flex gap-6 items-center h-15 px-6 mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/svg/sidebar/home.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-base-content'>Home</p>
                    </div>
                }

                {/* ----------BOOKS------------- */}
                {currentPage === "books"
                    ? <div className='flex gap-6 items-center bg-primary rounded-xl h-15 px-6 border-2 border-neutral mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/png/sidebar/book.png"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-primary-content'>Books</p>
                    </div>
                    : <div className='flex gap-6 items-center h-15 px-6 mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/svg/sidebar/book.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-base-content'>Books</p>
                    </div>
                }

                {/* ----------DICTIONARY------------- */}
                {currentPage === "dictionary"
                    ? <div className='flex gap-6 items-center bg-primary rounded-xl h-15 px-6 border-2 border-neutral mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/png/sidebar/home.png"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-primary-content'>Dictionary</p>
                    </div>
                    : <div className='flex gap-6 items-center h-15 px-6 mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/svg/sidebar/comments.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-base-content'>Dictionary</p>
                    </div>
                }

                {/* ----------AUDIO BOOK------------- */}
                {currentPage === "audiobooks"
                    ? <div className='flex gap-6 items-center bg-primary rounded-xl h-15 px-6 border-2 border-neutral mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/png/sidebar/home.png"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-primary-content'>Audio Books</p>
                    </div>
                    : <div className='flex gap-6 items-center h-15 px-6 mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/svg/sidebar/audiobook.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-base-content'>Audio Books</p>
                    </div>
                }

                {/* ----------LEITNER------------- */}
                {currentPage === "leitner"
                    ? <div className='flex gap-6 items-center bg-primary rounded-xl h-15 px-6 border-2 border-neutral mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/png/sidebar/home.png"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-primary-content'>Leitner</p>
                    </div>
                    : <div className='flex gap-6 items-center h-15 px-6 mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/svg/sidebar/flame.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-base-content'>Leitner</p>
                    </div>
                }

                {/* ----------CONTACT US------------- */}
                {currentPage === "contactus"
                    ? <div className='flex gap-6 items-center bg-primary rounded-xl h-15 px-6 border-2 border-neutral mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/png/sidebar/home.png"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-primary-content'>Leitner</p>
                    </div>
                    : <div className='flex gap-6 items-center h-15 px-6 mb-3'>
                        <div className='w-5 relative h-5'>
                            <Image
                                src={"/svg/sidebar/callout.svg"}
                                alt={"iconImage"}
                                objectFit={"contain"}
                                layout={"fill"}
                            />
                        </div>
                        <p className='text-base-content'>Leitner</p>
                    </div>
                }
            </div>

            {/* ----------SIGN/IN/OUT------------- */}
            <div className='flex gap-6 items-center bg-secondary rounded-xl h-15 px-6 border-2 border-neutral mb-8 mt-auto'>
                <div className='w-5 relative h-5'>
                    <Image
                        src={"/svg/sidebar/sign-out.svg"}
                        alt={"iconImage"}
                        objectFit={"contain"}
                        layout={"fill"}
                    />
                </div>
                <p className='text-base-content'>Sign Out</p>
            </div>

        </div>
    )
}
