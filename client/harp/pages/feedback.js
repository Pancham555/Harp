import React from 'react'
import Head from 'next/head'
import ChatCard from '../Components/chat/chatCard'
import Navbar from '../Components/Navbar'
import ChatSender from '../Components/chat/chatSender'
const Feedback = () => {
    return (
        <>
            <Head>
                <title>Feedback</title>
            </Head>
            <Navbar />
            <div className='my-5'>
                <ChatCard chatman="Unknown" chat="Hello there, I am here to help you in any queries you need." />
            </div>
            <ChatSender />
        </>
    )
}

export default Feedback