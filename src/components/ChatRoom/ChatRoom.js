import React from 'react'
import './ChatRoom.css'
import ChatMessage from '../ChatMessaage/ChatMessage'

export default function ChatRoom() {


    return (
        <div className='chatroom'>
            <div className='chatroom-messages'>

            </div>
            <form className='chatroom-form'>
                <input type='text' placeholder='say something' />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}
