import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Input from '../../components/forms/input';
import PasswordInput from '../../components/forms/passwordInput';
import SideIcon from '../../assets/—Pngtree—hand drawn online learning cartoon_5341175.png';
import User from '../../assets/user.png';
import Mail from '../../assets/mail.png';
import Call from '../../assets/call.png';
import PadLock from '../../assets/padlock.png';
import PadLock2 from '../../assets/padlock2.png';
import { useHistory } from 'react-router';
const Registration = () => {
    const history = useHistory()
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })

    const sendUserData = async (e) => {
        e.preventDefault()
        const url = "/register"
        const { name, email, phone, password, cpassword } = userData
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        })
        const data = await response.json()
        if (data.error || !data) {
            alert(data.error)
            console.log(data.error);
        }
        else {
            alert("Registration successful")
            console.log("Registration successful")
            history.push("/login")
        }
        setuserData({ ...userData, name: "", email: "", phone: "", password: "", cpassword: "" })
    }

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="flex justify-center">

                <div className="shadow-2xl rounded-lg flex flex-wrap justify-evenly md:justify-between md:mx-0 mx-3 w-full md:w-10/12 my-3 p-3 bg-white dark:bg-gray-700 dark:text-white">

                    <div className="my-5 w-full md:w-1/2 flex justify-center items-center flex-col md:order-1 order-2">

                        <div className="font-black text-2xl mt-5">Sign Up</div>

                        <div className="flex justify-center items-center w-9/12 flex-col">
                            <Input icon={User} val={userData.name} change={(e) => setuserData({ ...userData, name: e.target.value })} type='text' placeholder='Your Name' />
                            <Input icon={Mail} val={userData.email} change={(e) => setuserData({ ...userData, email: e.target.value })} type='email' placeholder='Your Email' />
                            <Input icon={Call} val={userData.phone} change={(e) => setuserData({ ...userData, phone: e.target.value })} type='text' placeholder='Your Number' />
                            <PasswordInput icon={PadLock} val={userData.password} change={(e) => setuserData({ ...userData, password: e.target.value })} placeholder='Your Password' />
                            <PasswordInput icon={PadLock2} val={userData.cpassword} change={(e) => setuserData({ ...userData, cpassword: e.target.value })} placeholder='Confirm Password' />
                            <div className="my-4 px-10 py-3 rounded-md bg-blue-500 text-white text-xl cursor-pointer" onClick={sendUserData}>Register</div>
                        </div>
                    </div>

                    <div className="w-auto md:w-1/2 m-0 md:m-auto md:order-2 order-1 flex justify-center flex-col">
                        <img src={SideIcon} alt="" className='w-80 mx-auto' />
                        <div className="text-center font-medium m-3">Already have an account <Link to='/login' className='font-black'>Sign in</Link></div>
                    </div>
                </div>

            </motion.div>
            <Footer />
        </>
    )
}

export default Registration