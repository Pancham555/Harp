import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Slidebar = (props) => {
    return (
        <>
            <div className={`select-none duration-500 bg-white overflow-hidden fixed top-0 bottom-0 right-0 z-50 block h-screen ml-4 shadow-2xl lg:hidden ${props.width ? 'w-80' : 'w-0'}`}>
                <div className="absolute text-3xl font-medium cursor-pointer top-3 right-5" onClick={props.click}>&times;</div>
                <div className="h-full rounded-2xl dark:bg-gray-700">
                    <div className="flex items-center justify-center pt-6">
                        <Link href='/' passHref>
                            <div className='w-24 h-20 cursor-pointer'>
                                <Image
                                    width='1000000'
                                    height='1000000'
                                    src='/198-1986551_lion-tattoo-clipart-black-dragon-face-hd-png-removebg-preview.png'
                                    layout='intrinsic'
                                    quality='100'
                                    alt="Dragon icon"
                                    priority={true}
                                    unoptimized={true}
                                />
                            </div>
                        </Link>
                    </div>
                    <nav className="mt-6">
                        <div>
                            <Link href='/profile' passHref>
                                <a className="flex items-center justify-start w-full p-4 font-thin text-gray-500 uppercase transition-colors duration-200 border-l-4 focus:border-blue-500 bg-gradient-to-r from-white focus:to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500" href="#">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-medium">
                                        Profile
                                    </span>
                                </a>
                            </Link>
                            <Link href='/blog' passHref>
                                <a className="flex items-center justify-start w-full p-4 font-thin text-gray-500 uppercase transition-colors duration-200 border-l-4 focus:border-blue-500 bg-gradient-to-r from-white focus:to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500" href="#">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-medium">
                                        Blog
                                    </span>
                                </a>
                            </Link>
                            <Link href='/about' passHref>
                                <a className="flex items-center justify-start w-full p-4 font-thin text-gray-500 uppercase transition-colors duration-200 border-l-4 focus:border-blue-500 bg-gradient-to-r from-white focus:to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500" href="#">
                                    <span className="text-left">
                                        <svg width="20" height="20" className="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-medium">
                                        About
                                    </span>
                                </a>
                            </Link>
                            <Link href='/feedback' passHref>
                                <a className="flex items-center justify-start w-full p-4 font-thin text-gray-500 uppercase transition-colors duration-200 border-l-4 focus:border-blue-500 bg-gradient-to-r from-white focus:to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500" href="#">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-medium">
                                        Report an issue
                                    </span>
                                </a>
                            </Link>
                            <a className="flex items-center justify-start w-full p-4 font-thin text-gray-500 uppercase transition-colors duration-200 border-l-4 focus:border-blue-500 bg-gradient-to-r from-white focus:to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500" href="#">
                                <span className="text-left">
                                    <svg width="20" fill="currentColor" height="20" className="w-5 h-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="mx-4 text-sm font-medium">
                                    Settings
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Slidebar