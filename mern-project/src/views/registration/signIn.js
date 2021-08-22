import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isAuth } from '../../redux/action';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Input from '../../components/forms/input';
import PasswordInput from '../../components/forms/passwordInput';
import Mail from '../../assets/mail.png';
import PadLock from '../../assets/padlock.png';
import SideIcon from '../../assets/—Pngtree—hand drawn online education online_4986515.png';
const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })
    const sendUserData = async (e) => {
        e.preventDefault()
        const url = "/login"
        const { email, password } = userData
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json()
        if (data.error || !data) {
            alert(data.error)
            console.log(data.error);
        }
        else {
            alert("LogIn successful")
            console.log("LogIn successful")
            dispatch(isAuth())
            history.push('/about')

        }
        setuserData({ ...userData, email: "", password: "" })
    }
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="flex justify-center ">

                <div className="shadow-2xl rounded-lg flex flex-wrap justify-evenly md:justify-between md:mx-0 mx-3 w-full md:w-10/12 my-16 p-4 bg-white dark:bg-gray-700 dark:text-white">

                    <div className="w-auto md:w-1/2 m-0 md:m-auto  flex justify-center flex-col">
                        <img src={SideIcon} alt="" className='w-80 mx-auto' />
                        <div className="text-center font-medium m-3">Didn't have an account <Link to='/registration' className='font-black'>Sign Up</Link></div>
                    </div>

                    <div className="my-5 w-full md:w-1/2 flex justify-center items-center flex-col ">

                        <div className="font-black text-2xl mt-5">Sign In</div>

                        <div className="flex justify-center items-center w-9/12 flex-col">
                            <Input icon={Mail} val={userData.email} change={(e) => setuserData({ ...userData, email: e.target.value })} type='email' placeholder='Your Email' />
                            <PasswordInput icon={PadLock} val={userData.password} change={(e) => setuserData({ ...userData, password: e.target.value })} placeholder='Your Password' />
                            <div className="my-4 px-10 py-3 rounded-md bg-blue-500 text-white text-xl cursor-pointer" onClick={sendUserData}>Log In</div>
                        </div>
                    </div>
                </div>

            </motion.div>
            <Footer />
        </>
    )
}

export default SignIn
