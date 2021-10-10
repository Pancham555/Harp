import React from 'react'
import Image from 'next/image'
const Card = (props) => {
    return (
        <div className="w-auto h-auto m-5 cursor-pointer select-none md:w-96" onClick={props.click}>
            <div className="w-full h-64">
                <Image src={props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg"} alt={props.alt ? props.alt : "dynamic cards"}
                    width='1000'
                    height='660'
                    layout='responsive'
                    unoptimized={true}
                    quality='40'
                    className='w-full h-full'
                />
            </div>
            <div className="mx-2 font-medium">
                <div className="my-2 text-2xl break-words break-all">{props.heading ? props.heading : "Heading"}</div>
                <div className="break-words break-all">
                    {props.txt ? props.txt : `
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Omnis ullam quia repellat eius harum saepe velit aut maxime
                     tempora ipsum.
                    `}
                </div>
            </div>
        </div>
    )
}

export default Card
