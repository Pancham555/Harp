import React from 'react'
import Navbar from '../Components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Components/footer'
const Profile = () => {
    return (
        <div className='select-none'>
            <Head>
                <title>Profile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-between w-auto my-16">
                    <div className="w-12 h-12 m-5">
                        <Image
                            width='1000000'
                            height='1000000'
                            src="/profile-user.png"
                            layout='intrinsic'
                            quality='100'
                            alt="profile image"
                            unoptimized={true}
                        />
                    </div>
                    <div className="mx-5">
                        <div className="my-2 text-xl font-bold md:text-3xl">Lorem, ipsum. </div>
                        <div className="font-medium text-md md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-2 mb-5">
                <div className="px-4 py-4 m-2 font-medium text-white bg-blue-500 rounded cursor-pointer text-md">Create chat room</div>
                <Link href='/chat' passHref>
                    <div className="px-4 py-4 m-2 font-medium text-white bg-blue-500 rounded cursor-pointer text-md">Go to chat room</div>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Profile