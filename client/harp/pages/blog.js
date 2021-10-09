import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Blog = () => {
    const { value } = useSelector(state => state.link)
    const [state, setstate] = useState()
    const getData = () => {
        axios.get(`/blog/${value}`).then(res => {
            setstate(res.data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div>
                <div className="w-full">
                    {state}
                </div>
            </div>
        </>
    )
}

export default Blog
