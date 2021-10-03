import React, { useState } from 'react'
import Head from 'next/head'
const ChatSender = () => {
    const [state, setState] = useState("")
    return (
        <>
            <Head>
            </Head>
            <div className='fixed bottom-0 left-0 right-0 flex justify-center m-5'>
                <div className="flex justify-center" style={{ width: "36rem" }}>
                    <input type="text" placeholder='Type a message' value={state} onChange={(e) => setState(e.target.value)}
                        className='w-full h-10 px-2 my-auto font-medium border-2 border-blue-500 rounded-md outline-none ring-blue-500'
                    />
                    <div className="p-3 mx-1 text-white bg-blue-500 rounded-full cursor-pointer ">
                        <svg viewBox="0 0 495.003 495.003" className='w-6 text-white fill-current'>
                            <g>
                                <path d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
		l-67.6-32.22V456.687z"/>
                                <path d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
		c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
		l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
		L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatSender
