import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionONN } from '../../../redux/action'
const DarkMode = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.reducer)
    return (
        <div className="md:my-auto my-2 mx-3">
            <div className='rounded-full dark:bg-gray-500 bg-gray-200'>
                <div className='flex relative md:bg-transparent cursor-pointer border-2 dark:border-gray-500 rounded-full w-16 overflow-hidden my-auto' onClick={() => dispatch(actionONN())}>
                    <span className='absolute left-0 z-0' style={{ margin: "0.05rem 0rem" }}>🌜</span>
                    <div className={`p-3 border-2  rounded-full w-5 ${state ? "ml-8 bg-yellow-500 border-yellow-500" : "ml-0 bg-gray-400 border-gray-400"} duration-200 z-50`}></div>
                    <span className='absolute right-0 z-0' style={{ margin: "0.05rem 0rem" }}>🌞</span>
                </div>
            </div>
        </div>
    )
}

export default DarkMode
