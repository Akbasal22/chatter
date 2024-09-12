import React from 'react'
import stranger from '../../assets/welcome-stranger.jpg'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'


export default function Welcome() {
    const navigate = useNavigate();
    function loginClick() {
        navigate("/login");
    }

    return (
        <div className='welcome'>
            <span className='welcome-title'> <span className='accent'>Connect</span> with total strangers! </span>
            <span className='welcome-description'>What could go wrong?</span>
            <button className='welcome-login-btn' onClick={loginClick}>Login</button>
        </div>
    )
}
