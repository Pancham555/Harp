import React from "react";
import { motion } from "framer-motion";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Mern from '../assets/PikPng.com_stack-of-cookies-png_3962104.png';
const About = () => {
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="bg-white py-3 my-12 dark:bg-gray-800 dark:text-white"
            >
                <div className="flex justify-center lg:mx-10 mx-6 flex-wrap">
                    <div className="w-full flex justify-center flex-col lg:px-5 px-2 py-2 lg:w-7/12 order-2 lg:order-1 h-auto">
                        <div className="text-4xl my-5 font-medium">Mern Stack</div>
                        <div className=" my-1 text-xl">
                            This page meant for mern development purpose and is not intended
                            to be any social media site.The sole purpose of it is to make a
                            working site wich has both front end,backend and database with
                            mern stack.The whole engineering of this site is done entirely in
                            javascript.
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12  order-1 lg:order-2 flex justify-center items-center flex-col">
                        <img src={Mern} alt="" className="w-full h-full m-auto" />
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default About;
