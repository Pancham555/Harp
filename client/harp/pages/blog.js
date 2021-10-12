import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Blog = () => {
    const { value } = useSelector(state => state.link)
    const [state, setstate] = useState()
    const router = useRouter()
    const getData = () => {
        axios.get(`/blog/${value}`).then(res => {
            setstate(res.data)
        }).catch(err => console.log(err))
    }

    const cookieverify = () => {
        axios.get('/middleware/').then((res) => {
            console.log(res.data);
            if (res.data == "Cookie verified") {
                getData()
            }
            else {
                router.push('/signin')
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        cookieverify()
    }, [])
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />

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
