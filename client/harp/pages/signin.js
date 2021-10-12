import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image';
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import Input from '../Components/forms/input';
import PasswordInput from '../Components/forms/passwordInput';
import axios from 'axios';
const SignIn = () => {
    const [userData, setuserData] = useState({
        emailOrUsername: "",
        password: ""
    })


    const sendUserData = () => {
        axios.post('/register/signin', {
            emailOrUsername: userData.emailOrUsername,
            password: userData.password,

        }, {
            withCredentials: true
        }).then((res) => {
            alert(res.data)
        }).catch((err) => alert(err))
    }
    return (
        <>
            <Head>
                <title>Sign in</title>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />

            </Head>
            <Navbar />
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="flex justify-center ">

                <div className="flex flex-wrap w-full p-4 mx-3 my-16 bg-white rounded-lg shadow-2xl justify-evenly md:justify-between md:mx-0 md:w-10/12 dark:bg-gray-700 dark:text-white">

                    <div className="flex flex-col justify-center w-auto m-0 md:w-1/2 md:m-auto">
                        <div className='mx-auto w-80'>
                            <Image
                                width='1000000'
                                height='1000000'
                                src='/—Pngtree—hand drawn online education online_4986515.png'
                                layout='intrinsic'
                                quality='100'
                                alt=""
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                        <div className="m-3 font-medium text-center">Didn&quot;t have an account <Link href='/signup' passHref><a className='font-black'>Sign Up</a></Link></div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full my-5 md:w-1/2 ">

                        <div className="mt-5 text-2xl font-black">Sign In</div>

                        <div className="flex flex-col items-center justify-center w-9/12">
                            <Input icon='/mail.png' val={userData.emailOrUsername} change={(e) => setuserData({ ...userData, emailOrUsername: e.target.value })} type='email' placeholder='Your username or email' />
                            <PasswordInput icon='/padlock.png' val={userData.password} change={(e) => setuserData({ ...userData, password: e.target.value })} placeholder='Your Password' />
                            <div className="px-10 py-3 my-4 text-xl text-white bg-blue-500 rounded-md cursor-pointer" onClick={sendUserData}>Log In</div>
                        </div>
                    </div>
                </div>

            </motion.div>
            <Footer />
        </>
    )
}

export default SignIn

