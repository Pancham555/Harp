import React from 'react'

const Input = (props) => {
    return (
        <form className='flex my-4 border-b-4 pb-2 w-full dark:bg-gray-700 dark:text-white dark:border-gray-900'>
            <img src={props.icon} alt="" className='w-5 h-5 mr-4' />
            <input type={props.type} value={props.val} onChange={props.change} placeholder={props.placeholder} autoComplete='off' className='text-lg font-bold border-gray-300 outline-none dark:bg-gray-700 dark:text-white' />
        </form>
    )
}

export default Input
