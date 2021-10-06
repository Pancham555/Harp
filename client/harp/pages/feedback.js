import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import ChatCard from '../Components/chat/chatCard'
import Navbar from '../Components/Navbar'
import ChatSender from '../Components/chat/chatSender'
import axios from 'axios'
const Feedback = () => {
    const [chat, showChat] = useState([])
    const [text, setText] = useState("")
    const getData = () => {
        axios.get('/chatserver').then(res => {
            showChat(res.data)
        }).catch(err => console.log(err))
    }
    const sendData = () => {
        axios.post('/chatserver', {
            chat: text
        }).then(data => console.log(data.data))
            .catch(err => console.log(err))
        setText("")
    }

    useEffect(() => {
        getData()
    }, [chat])
    return (
        <>
            <Head>
                <title>Chat room</title>
            </Head>
            <Navbar />
            <div className='mt-5 mb-20'>
                <ChatCard chatman="Unknown" chat="Hello there, this is a chat room,bring your friends here and chat :)" />
                {chat.map((data, index) => {
                    return <div key={index}>
                        <ChatCard chat={data.chat} />
                    </div>
                })}
            </div>
            <ChatSender statechange={text} inputchange={(e) => setText(e.target.value)}
                click={sendData} />
        </>
    )
}

export default Feedback