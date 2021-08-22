import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import Footer from '../components/footer/footer';
import FrontImage from "../assets/Front-page.png";
import Circle from "../assets/oie_transparent.png";
import Card from "../components/cards/homeCard";
const Home = () => {
    const [state, setState] = useState(false);
    const [secState, setSecState] = useState(false);
    document.onscroll = () => {
        var winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        var height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        if (scrolled > 15) {
            setState(true);
        } else {
            setState(false);
        }

        if (scrolled > 60) {
            setSecState(true);
        }

        else {
            setSecState(false);
        }
    };

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="bg-white dark:bg-gray-800 dark:text-white pb-3"
            >
                <div className="flex justify-center lg:mx-10 mx-6 flex-wrap">
                    <div className="w-full flex justify-center flex-col lg:px-5 px-2 py-2 lg:w-7/12 order-2 lg:order-1 h-auto">
                        <div className="text-4xl my-5 font-medium">Harp Technologies</div>
                        <div className=" my-1 text-xl">
                            This page meant for mern development purpose and is not intended
                            to be any social media site.The sole purpose of it is to make a
                            working site wich has both front end,backend and database with
                            mern stack.The whole engineering of this site is done entirely in
                            javascript.
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12  order-1 lg:order-2 flex justify-center items-center flex-col">
                        <img src={FrontImage} alt="" className="w-full h-full m-auto" />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={
                    state
                        ? { paddingTop: "0rem", opacity: 1 }
                        : { paddingTop: "4rem", opacity: 0 }
                }
                transition={{ duration: 0.75 }}
                className="my-5 mx-2"
            >
                <div className="text-4xl p-5 font-medium text-center dark:text-white">Our Projects</div>
                <div className="flex flex-wrap justify-around">
                    <Card
                        imgurl={`https://wallpapercave.com/wp/ZxV8qRo.jpg`}
                        heading={`Card 1`}
                        text={`This is a sample card just for fun....enjoy, and
                        there's nothing with the image above, it's just for attraction purpose
                        `}
                    />
                    <Card
                        imgurl={`https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg`}
                        heading={`Card 2`}
                        text={`This is a sample card just for fun....enjoy, and
                        there's nothing with the image above, it's just for attraction purpose
                        `}
                    />
                    <Card
                        imgurl={`https://media.cntraveler.com/photos/5c61cfcd9189f70d80586f87/master/w_1600%2Cc_limit/Matira-Beach%2C-Bora-Bora_GettyImages-533673868.jpg`}
                        heading={`Card 3`}
                        text={`This is a sample card just for fun....enjoy, and
                        there's nothing with the image above, it's just for attraction purpose
                        `}
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={
                    secState
                        ? { paddingTop: "0rem", opacity: 1 }
                        : { paddingTop: "4rem", opacity: 0 }
                }
                transition={{ duration: 0.75 }}
                className="bg-white dark:bg-gray-800 dark:text-white pb-3"
            >
                <div className="flex justify-center lg:mx-10 mx-6 flex-wrap">
                    <div className="w-full flex justify-center flex-col lg:px-5 px-2 py-2 lg:w-7/12 order-2 lg:order-1 h-auto">
                        <div className="text-4xl my-5 font-medium">Our Initiative</div>
                        <div className=" my-1 text-xl">
                            Is to do nothing but chill and watch people watching this website for no
                            reason, since you guys have enough time to watch instagram and facebook, so
                            watching this website won't hurt you, atleast your concentration will increase
                            to some extent (or maybe not).....Anyways watch this again and again till you get bored
                            enough to smash your phone :)))))
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12  order-1 lg:order-2 flex justify-center items-center flex-col">
                        <img src={Circle} alt="" className="w-full h-full m-auto" />
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Home;
