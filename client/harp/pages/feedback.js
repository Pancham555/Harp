import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ChatCard from '../Components/chat/chatCard'
import Navbar from '../Components/Navbar'
import ChatSender from '../Components/chat/chatSender'
import axios from 'axios'
const Feedback = () => {
    const [user, setUser] = useState({ name: "user" })
    const [text, setText] = useState("")
    const [chat, setchat] = useState([])
    const router = useRouter()

    const cookieverify = () => {
        axios.get('/middleware/').then((res) => {
            if (res.data.message == "Cookie verified") {
                setUser({ ...user, name: res.data.name })
            }
            else {
                router.push('/signin')
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const getChatData = () => {
        axios.get('/feedbackserver').then(res => {
            setchat(res.data)
        }).catch(err => console.log(err))
    }

    const sendChatData = () => {
        if (text == "") {
            alert("Feedback canot be empty")
        } else {
            axios.post('/feedbackserver', {
                userfeedback: text
            }).then(res => {
                alert(res.data)
            }).catch(err => console.log(err))
        }
        setText("")
    }
    useEffect(() => {
        cookieverify()
        getChatData()
    }, [chat])
    return (
        <>
            <Head>
                <title>Chat room</title>
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />

            </Head>
            <Navbar />
            <div className='mt-5 mb-20'>
                <ChatCard chatman="Unknown" chat="Hello there, this is a chat room,bring your friends here and chat :)" />
                {chat.map((data, index) => {
                    return <div key={index}>
                        <ChatCard chatman={data.head ? "harpnett" : user.name} chat={data.remarks} />
                    </div>
                })}
            </div>
            <ChatSender statechange={text} inputchange={(e) => setText(e.target.value)}
                click={sendChatData} />
        </>
    )
}

export default Feedback