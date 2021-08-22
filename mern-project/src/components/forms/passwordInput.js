import React, { useState } from 'react'
import EyeCross from '../../assets/PngItem_4950508.png'
import EyeOpen from '../../assets/clipart2178237.png'
const PasswordInput = (props) => {
    const [eye, setEye] = useState(true)
    return (
        <form className='flex my-4 border-b-4 pb-2 w-full dark:bg-gray-700 dark:text-white dark:border-gray-900'>
            <img src={props.icon} alt="" className='w-5 h-5 mr-4' />
            <input type={eye ? "password" : "text"} value={props.val} onChange={props.change} placeholder={props.placeholder} autoComplete='off' className='text-lg font-bold border-gray-300 outline-none dark:bg-gray-700 dark:text-white w-9/12' />
            <img src={eye ? EyeCross : EyeOpen} alt="" className='w-6 h-5 mr-4 cursor-pointer' onClick={() => setEye(!eye)} />
        </form>
    )
}

export default PasswordInput