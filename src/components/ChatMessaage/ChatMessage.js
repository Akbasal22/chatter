import React from 'react'
import './ChatMessage.css'

export default function ChatMessaage({ message }) {
    console.log(message);

    function dateConverter(timestamp) {
        const date = timestamp;
        // Extract hours and minutes
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return (
        <div className={`message-container ${message.class}`}>
            <img className='message-photo' src={message.photoURL} alt={'img'} />
            <div className='message-body'>

                <span className='message'>{message.body}</span>

            </div>

        </div>
    )
}
