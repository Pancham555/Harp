import React from 'react'

const FooterLink = (props) => {
    return (
        <a href={props.link}
            target='_blank' rel='noreferrer'
        >
            <div className="cursor-pointer md:mx-5 mx-3">
                <img src={props.img} alt="" className='w-9 h-9 mx-auto' />
                <div className="text-md font-medium text-center">{props.name}</div>
            </div>
        </a>
    )
}

export default FooterLink
