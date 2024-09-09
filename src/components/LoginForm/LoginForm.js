import React from 'react'
import image from '../../assets/Forgot password-bro.svg'
import './LoginForm.css'
import '../../App.css'

export default function LoginForm() {
    return (
        <div className='login-form-container'>

            <img className='login-img' src={image} />

            <form className='login-form'>
                <span className='login-form-text'>Welcome</span>
                <input type='email' placeholder='E-mail'></input>
                <input type='password' placeholder='Password'></input>
                <button>Log in</button>
                <button>Create Account</button>
                <hr />
                <button>Login with Google</button>
            </form>

        </div>
    )
}
