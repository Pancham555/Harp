import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />
            </Head>
            <Navbar />
            <div className="my-20">
                <motion.div
                    initial={{ paddingTop: "4rem", opacity: 0 }}
                    animate={{ paddingTop: "0rem", opacity: 1 }}
                    transition={{ duration: 0.75 }}
                    className="pb-3 bg-white dark:bg-gray-800 dark:text-white"
                >
                    <div className="flex flex-wrap justify-center mx-6 lg:mx-10">
                        <div className="flex flex-col justify-center order-2 w-full h-auto px-2 py-2 lg:px-5 lg:w-8/12 lg:order-1">
                            <div className="my-5 text-4xl font-medium">Harp Tech</div>
                            <div className="my-1 text-xl ">
                                This website is intended to make a major change in people&quot;s life, and you being a user is extremely helpful for us
                                to complete our mission.Please the website to link to others so they can also know that there&quot;s somewhere in internet is a place where
                                they can learn new stuff quickly ,easily ,and with a good community support.
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center order-1 w-full lg:w-4/12 lg:order-2">
                            <Image
                                width='1000000'
                                height='666000'
                                src="/198-1986551_lion-tattoo-clipart-black-dragon-face-hd-png-removebg-preview.png"
                                layout='intrinsic'
                                quality='100'
                                alt="dragon face"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            < Footer />
        </>
    )
}

export default About
