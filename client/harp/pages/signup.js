import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import Input from '../Components/forms/input';
import PasswordInput from '../Components/forms/passwordInput';
import axios from 'axios'
const Signup = () => {
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })

    const setCookie = () => {
        axios.post('/middleware/set', {
            username: userData.name
        }).then((res) => {
            alert(res.data)
        }).catch(err => console.log(err))
    }

    const sendUserData = async () => {
        axios.post('/register/signup', {
            username: userData.name,
            email: userData.email,
            phone: userData.phone,
            password: userData.password,
            cpassword: userData.cpassword
        }).then((res) => {
            if (res.data == "Account added successfully") {
                setCookie()
            }
            else {
                alert(res.data)
            }
        })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />

            </Head>
            <Navbar />
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="flex justify-center">

                <div className="flex flex-wrap w-full p-3 mx-3 mt-3 mb-8 bg-white rounded-lg shadow-2xl justify-evenly md:justify-between md:mx-0 md:w-10/12 dark:bg-gray-700 dark:text-white">

                    <div className="flex flex-col items-center justify-center order-2 w-full my-5 md:w-1/2 md:order-1">

                        <div className="mt-5 text-2xl font-black">Sign Up</div>

                        <div className="flex flex-col items-center justify-center w-9/12">
                            <Input icon='/user.png' val={userData.name} change={(e) => setuserData({ ...userData, name: e.target.value })} type='text' placeholder='Your Name' />
                            <Input icon='/mail.png' val={userData.email} change={(e) => setuserData({ ...userData, email: e.target.value })} type='email' placeholder='Your Email' />
                            <Input icon='/call.png' val={userData.phone} change={(e) => setuserData({ ...userData, phone: e.target.value })} type='text' placeholder='Your Number' />
                            <PasswordInput icon='/padlock.png' val={userData.password} change={(e) => setuserData({ ...userData, password: e.target.value })} placeholder='Your Password' />
                            <PasswordInput icon='/padlock2.png' val={userData.cpassword} change={(e) => setuserData({ ...userData, cpassword: e.target.value })} placeholder='Confirm Password' />
                            <div className="px-10 py-3 my-4 text-xl text-white bg-blue-500 rounded-md cursor-pointer" onClick={sendUserData}>Register</div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center order-1 w-auto m-0 md:w-1/2 md:m-auto md:order-2">
                        <div className='mx-auto w-80'>
                            <Image
                                width='1000000'
                                height='1000000'
                                src='/—Pngtree—hand drawn online learning cartoon_5341175.png'
                                layout='intrinsic'
                                quality='100'
                                alt=""
                                priority={true}
                                unoptimized={true}
                            />
                        </div>
                        <div className="m-3 font-medium text-center">Already have an account <Link href='/signin' passHref><a className='font-black'>Sign in</a></Link></div>
                    </div>
                </div>

            </motion.div>
            <Footer />
        </>
    )
}

export default Signup