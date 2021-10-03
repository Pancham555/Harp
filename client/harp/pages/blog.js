import React from "react";
import Navbar from "../Components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from '../styles/Home.module.css'
import Footer from '../Components/footer'
import Card from "../Components/card";
import axios from "axios";
import Head from 'next/head'
import Image from "next/image";
const Blog = () => {
    const cardArr = [
        {
            img: "https://mmsolutions.biz/wp-content/gallery/hi-tech/Hi%20-%20Tech%203.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "https://www.ns-businesshub.com/wp-content/uploads/sites/11/2019/08/48629609657_e518ecfd69_k.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "/futuristic-3840x2160-future-world-4k-20319.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "https://getwallpapers.com/wallpaper/full/2/5/d/1111038-best-techie-wallpaper-1920x1200-for-computer.jpg",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "https://media0.giphy.com/media/1aIX95JPJddFm/giphy.gif?cid=790b761111754dcd7cab64fd2ad3017f33d54b4bdeca5e6e&rid=giphy.gif&ct=g",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        },
        {
            img: "https://gifimage.net/wp-content/uploads/2018/06/tech-gif-1.gif",
            heading: "Heading",
            text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis ullam quia repellat eius harum saepe velit aut maxime
            tempora ipsum.
            `

        }
    ]
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
                                    quality='100'
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
                {cardArr.map((data, index) => {
                    return <div key={index}>
                        <Card
                            // img={data.img}
                            alt={`card ${index}`} head={data.heading} txt={data.text} />
                    </div>
                })}
            </div>
            <Footer />
        </>
    );
};

export default Blog;
