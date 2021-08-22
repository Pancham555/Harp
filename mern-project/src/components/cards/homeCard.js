import React from 'react'

const HomeCard = (props) => {
    return (
        <div className='rounded-lg shadow-2xl m-5 w-96 h-full dark:bg-gray-700 dark:text-white'>
            <img src={props.imgurl} alt=""
                // https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg
                className='rounded-t-lg h-52 w-full'
            />
            <div className="mx-6">
                <div className="my-3 font-medium text-lg">{props.heading}</div>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                <div className="my-3">
                    {props.text}
                    {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus repellendus sint rerum nobis optio corporis assumenda totam debitis id
                    veniam! */}
                </div>
                <div className="hover:shadow-2xl duration-200 mt-2 mb-4 rounded-lg px-5 py-3 text-white bg-blue-500 inline-block cursor-pointer">Button</div>
            </div>
        </div>
    )
}

export default HomeCard
