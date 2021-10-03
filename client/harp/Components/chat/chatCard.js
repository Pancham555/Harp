import React from 'react'
import styles from './chat.module.css'
const ChatCard = (props) => {
    return (
        <div className='flex m-4'>
            <div className={styles.chat}></div>
            <div className={`inline-block px-3 py-2 font-medium text-white bg-blue-500 ${styles.rounder}`}>
                <div className="mb-2 text-xl">{props.chatman ? props.chatman : "User"}</div>
                <div className="text-lg">
                    {props.chat ? props.chat : ""}
                </div>
            </div>
        </div>
    )
}

export default ChatCard
