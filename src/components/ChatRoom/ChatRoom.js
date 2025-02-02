import React, { useEffect, useRef, useState } from 'react'
import './ChatRoom.css'
import ChatMessage from '../ChatMessaage/ChatMessage'
import { sendMessage, getSnapshot } from '../../firebase/firestore'
export default function ChatRoom() {


    const messageRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(true)

    async function handleSend(e) {
        e.preventDefault();
        const message = messageRef.current.value;
        await sendMessage(message);
        messageRef.current.value = "";
    }

    function handleChange() {
        setIsEmpty(!messageRef.current.value)
    }

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        getSnapshot(setMessages);
    }, [])


    const dummy = useRef();
    useEffect(() => {
        if (dummy.current) {
            dummy.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);



    return (
        <div className='chatroom'>
            <div className='chatroom-messages'>
                {messages.map(message => <ChatMessage message={message} />)}
                <div></div>
                <div ref={dummy}></div>
            </div>
            <form className='chatroom-form'>
                <input onChange={handleChange} type='text' placeholder='say something' ref={messageRef} />
                <button disabled={isEmpty} onClick={handleSend} type='submit' >Send Message</button>
            </form>
        </div>
    )
}
