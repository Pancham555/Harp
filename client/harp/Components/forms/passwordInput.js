import React, { useState } from 'react'
import Image from 'next/image'
const PasswordInput = (props) => {
    const [eye, setEye] = useState(true)
    return (
        <form className='flex w-full pb-2 my-4 border-b-4 dark:bg-gray-700 dark:text-white dark:border-gray-900'>
            <div className='w-5 h-5 mr-4'>
                <Image
                    width='1000000'
                    height='1000000'
                    src={props.icon}
                    layout='intrinsic'
                    quality='100'
                    alt=""
                    priority={true}
                    unoptimized={true}
                />
            </div>
            <input type={eye ? "password" : "text"} value={props.val} onChange={props.change} placeholder={props.placeholder} autoComplete='off' className='w-full text-lg font-bold border-gray-300 outline-none dark:bg-gray-700 dark:text-white' />
            <div className='w-6 h-5 mr-4 cursor-pointer' onClick={() => setEye(!eye)}>
                <Image
                    width='10000000'
                    height='10000000'
                    src={eye ? '/PngItem_4950508.png' : '/clipart2178237.png'}
                    layout='intrinsic'
                    quality='100'
                    alt=""
                    priority={true}
                    unoptimized={true}
                />
            </div>
        </form >
    )
}

export default PasswordInput