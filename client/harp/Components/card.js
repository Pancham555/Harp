import React from 'react'
import Image from 'next/image'
const Card = (props) => {
    return (
        <div className="max-w-lg mx-auto">
            <div className="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow-md">

                <Image className="rounded-t-lg" src={props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg"}
                    alt={props.alt ? props.alt : "dynamic cards"}
                    width='5000'
                    height='3000'
                    layout='responsive'
                    unoptimized={true}
                    quality='35'
                />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 break-words">
                        {props.heading ? props.heading : "Heading"}
                    </h5>

                    <p className="mb-3 font-medium text-gray-700 break-words">
                        {props.txt ? props.txt : `
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis ullam quia repellat eius harum saepe velit aut maxime
                      tempora ipsum.
                     `}
                    </p>
                    <a onClick={props.click} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white duration-150 bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
