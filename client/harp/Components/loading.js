import React from 'react'
import Head from 'next/head'
const Loading = (props) => {
    return (
        <div className={`${props.visibility ? "visible" : "invisible"}`}>
            <Head>
                <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous" />
            </Head>
            <div className='flex justify-center mb-5'>
                <span className="text-blue-600 opacity-75">
                    <i className="fas fa-circle-notch fa-spin fa-3x"></i>
                </span>
            </div>
        </div>
    )
}

export default Loading
