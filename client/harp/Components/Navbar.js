import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slidebar from './slidebar'
import { motion } from 'framer-motion'
const Navbar = () => {
    const [state, setState] = useState(false)
    const [opener, setOpener] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    return (
        <div className='sticky top-0 left-0 right-0 z-40 bg-white' style={{ WebkitTapHighlightColor: "transparent" }}>
            <motion.div
                initial={{ width: 0, height: 0 }}
                animate={searchBar ? { width: "auto", height: "auto" } : { width: 0, height: 0 }}
                transition={{ type: "tween" }}
                className="fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center mx-auto overflow-hidden font-medium bg-white shadow-2xl select-none">
                <div className="absolute top-0 left-0 m-5 text-3xl font-black cursor-pointer" onClick={() => setSearchBar(false)}>&larr;</div>
                <div className="flex flex-col justify-center w-full h-auto px-5 py-2">
                    <div className="flex justify-between w-full mx-auto">
                        <input type="text" placeholder='Enter your search term'
                            className='w-full h-10 px-2 my-auto border-2 border-blue-500 rounded-md outline-none ring-blue-500'
                        />
                        <div className="px-5 py-3 mx-2 text-white bg-blue-500 rounded-md cursor-pointer">Search</div>
                    </div>
                </div>
            </motion.div>
            <div className='z-40 bg-white shadow-2xl select-none '>
                <div className="flex justify-between px-3 py-3 md:py-3">

                    <Link href='/' passHref>
                        <div className="px-4 my-auto text-2xl font-medium cursor-pointer">Harp</div>
                    </Link>

                    <div className='flex justify-between my-auto md:justify-evenly'>
                        <div className="w-5 h-5 mx-5 my-auto cursor-pointer md:mx-0"
                            onClick={() => setSearchBar(true)}>
                            <Image
                                width='100'
                                height='100'
                                src="/magnifying-glass-search.png"
                                layout='intrinsic'
                                quality='100'
                                alt="search"
                                unoptimized={true}
                            />
                        </div>
                        <div className="relative hidden mx-5 my-auto text-xl font-medium md:flex justify-evenly">
                            <Link href='/blog' passHref>
                                <div className="px-3 mx-2 cursor-pointer">Blog</div>
                            </Link>
                            <Link href='/chatroom' passHref>
                                <div className="px-3 mx-2 cursor-pointer">Chat room</div>
                            </Link>
                            <Link href='/about' passHref>
                                <div className="px-3 mx-2 cursor-pointer">About</div>
                            </Link>
                            <Link href='/profile' passHref>
                                <div className="relative w-8 h-8 mx-2 my-auto cursor-pointer" onClick={() => setState(!state)}>
                                    <Image
                                        width='1000'
                                        height='1000'
                                        src="/profile-user.png"
                                        layout='intrinsic'
                                        quality='100'
                                        alt="User image"
                                        unoptimized={true}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div
                            className="inline-block mx-5 my-auto text-2xl font-black cursor-pointer md:hidden" onClick={() => setOpener(!opener)}
                        >
                            ☰
                        </div>
                    </div>

                </div>
                <Slidebar width={opener} click={() => setOpener(!opener)} />
            </div >
        </div >
    )
}

export default Navbar
