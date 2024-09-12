import React from 'react'
import './ChatMessage.css'

export default function ChatMessaage({ message }) {
    console.log(message);
    return (
        <div className={`message-container ${message.class}`}>
            <img className='message-photo' src={message.photoURL} alt={'img'} />
            <div className='message-body'>
                <span className='message'>{message.body}</span>
            </div>
        </div>
    )
}
