import React from 'react'
import FooterLink from './footerLink'
import GitHub from '../../assets/icons8-github-500.png'
import Instagram from '../../assets/instagram.png'
const Footer = () => {
    return (
        <div className='shadow-2xl px-10 bg-gray-200 dark:bg-gray-700 dark:text-white '>
            <div className='p-5 flex justify-evenly md:justify-between flex-wrap mt-8 border-t-2 border-b-2 dark:border-gray-700'>
                <div className="md:text-3xl text-xl font-medium my-3 md:my-auto">Harp Technologies</div>
                <div>
                    <div className="md:text-2xl text-lg text-center font-semibold">Follow us here</div>
                    <div className="flex flex-wrap justify-evenly md:mx-0 mx-auto my-5">
                        <FooterLink img={GitHub} name='Github' link='https://github.com/' />
                        <FooterLink img={Instagram} name='Instagram' link='https://www.instagram.com/' />
                    </div>
                </div>
            </div>
            <div className="text-center pb-3 font-medium md:text-lg text-md">- © All rights reserved -</div>
        </div>
    )
}

export default Footer
