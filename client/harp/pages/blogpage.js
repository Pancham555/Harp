import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { linker } from '../redux/redux'
import Navbar from "../Components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/Home.module.css'
import Footer from '../Components/footer'
import Card from "../Components/card";
import axios from "axios";
import Head from 'next/head'
import Image from "next/image";
import { useRouter } from 'next/router'
const BlogPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState([])

    const getBlogData = () => {
        axios.get('/blogs').then(res => {
            setBlogs(res.data)
        }).catch(err => console.log(err))
    }

    const carousel = [
        {
            img: "/daniel-korpai-8GDCzWrcE3M-unsplash.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate dignissimos veritatis iusto numquam voluptatum amet
            laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,
            voluptates optio veniam.
            `
        },
        {
            img: "/thisisengineering-raeng-sbVu5zitZt0-unsplash.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate dignissimos veritatis iusto numquam voluptatum amet
            laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,
            voluptates optio veniam.
            `
        },
        {
            img: "/georgie-cobbs-muOHbrFGEQY-unsplash.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate dignissimos veritatis iusto numquam voluptatum amet
            laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,
            voluptates optio veniam.
            `
        }
    ]

    useEffect(() => {
        getBlogData()
    }, [])

    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <Navbar />
            <div className="z-0">
                <Carousel infiniteLoop autoPlay={true} interval={4000}
                    showThumbs={false} showStatus={false} swipeScrollTolerance={20}
                    transitionTime={400} emulateTouch={true} showArrows={false}>
                    {carousel.map((data, index) => {
                        return <div key={index} className={`w-full text-left ${styles.grabbing}`} style={{ height: "72vh", zIndex: "-1" }}>
                            <div className="w-full h-full">
                                <Image
                                    loader=''
                                    width='600000'
                                    height='1000000'
                                    src={data.img}
                                    layout='intrinsic'
                                    quality='80'
                                    alt={`carousel card ${index}`}
                                    priority={true}
                                    unoptimized={true}
                                />
                            </div>
                            <div className="absolute top-0 left-0 right-0 z-30 flex justify-center mx-auto my-24">
                                <div className="z-30 w-auto h-auto p-5 mx-10 overflow-hidden bg-white rounded-md md:w-7/12">
                                    <div className="my-2 text-3xl font-medium">{data.heading}</div>
                                    <div className="text-lg font-medium">
                                        {data.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </Carousel>
            </div>
            <div className="flex flex-wrap my-8 justify-evenly">
                {blogs.map((data, index) => {
                    return <div key={index}>
                        <Card
                            img={data.img}
                            alt={`card ${index}`} heading={data.heading} txt={data.text}
                            click={() => {
                                dispatch(linker(data.link));
                                router.push('/blog');
                            }}
                        />
                    </div>
                })}
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
