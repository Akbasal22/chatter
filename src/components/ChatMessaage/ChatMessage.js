import React from 'react'
import './ChatMessage.css'

export default function ChatMessaage({ message }) {

    return (
        <div className={`message-container ${message.class}`}>
            <img className='message-photo' src={message.img} />
            <span className='message-body'>{message.body}</span>
        </div>
    )
}
