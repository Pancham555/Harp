import React from 'react'
import Head from 'next/head'
import ChatCard from '../Components/chat/chatCard'
import Navbar from '../Components/Navbar'
import ChatSender from '../Components/chat/chatSender'
const Chat = () => {
    return (
        <>
            <Head>
                <title>Chats</title>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />

            </Head>
            <Navbar />
            <div className='my-5'>
                <ChatCard chatman="Pancham" chat="Hello ji,me pancham hu ji" />
                <ChatCard chatman="Unknown" chat="Accha.." />
            </div>
            <ChatSender />
        </>
    )
}

export default Chat
