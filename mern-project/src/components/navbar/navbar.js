import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/AibrnBg8T.png'
import DarkMode from './darkmode/darkmode'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    window.onscroll = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        ref.current.style.width = scrolled + "%";
    }

    return (
        <div className='sticky top-0 left-0 right-0 shadow-lg dark:bg-gray-600 dark:text-white bg-white z-50'>
            <div className=' md:block flex justify-between px-4 '>
                <div className='flex justify-between md:flex-row flex-col '>

                    <NavLink to='/'>
                        <div className="cursor-pointer px-5 py-4 my-auto font-medium flex justify-between w-full">
                            <img src={Logo} alt="" className='w-10 h-5 my-auto mr-1' />
                            <div className="my-auto md:text-2xl text-3xl">Harp</div>
                        </div>
                    </NavLink>

                    <div className={`overflow-hidden ${open ? "md:h-auto h-48" : "md:h-auto h-0"} duration-200 w-auto my-auto`}>
                        <div className="text-gray-400 py-1 md:py-1 flex justify-evenly text-xl md:flex-row flex-col my-auto">
                            <span className='md:inline hidden my-auto'>
                                <DarkMode />
                            </span>
                            <NavLink to='/' activeClassName='text-black dark:text-white'>
                                <div className="md:px-2 px-5 m-2 md:bg-transparent cursor-pointer py-1">Home</div>
                            </NavLink>

                            <NavLink to='/about' activeClassName='text-black dark:text-white'>
                                <div className="md:px-2 px-5 m-2 md:bg-transparent cursor-pointer py-1">About</div>
                            </NavLink>

                            <NavLink to='/registration' activeClassName='text-black dark:text-white'>
                                <div className="md:px-2 px-5 m-2 md:bg-transparent cursor-pointer py-1">Registration</div>
                            </NavLink>

                        </div>
                    </div>
                </div>
                <div className="md:hidden font-extrabold py-3 cursor-pointer inline-block">
                    <div className='flex'>
                        <DarkMode />
                        <div className={`duration-200 flex flex-col border-2 ${open ? "border-yellow-400" : "border-gray-200"} rounded-lg px-2 py-1`} onClick={() => setOpen(!open)} >
                            <div className={`duration-200 m-1 w-12 h-1 ${open ? "bg-yellow-400" : "bg-gray-400"}`}></div>
                            <div className={`duration-200 m-1 w-12 h-1 ${open ? "bg-yellow-400" : "bg-gray-400"}`}></div>
                            <div className={`duration-200 m-1 w-12 h-1 ${open ? "bg-yellow-400" : "bg-gray-400"}`}></div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="w-full h-full">
                <div ref={ref} className="bg-blue-500 py-0.5 rounded-xl w-0"></div>
            </div>
        </div>
    )
}

export default Navbar
