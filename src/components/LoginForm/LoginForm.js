import React, { useRef, useState } from 'react'
import image from '../../assets/Forgot password-bro.svg'
import './LoginForm.css'
import '../../App.css'
import { authLoginWithEmailAndPassword, authCreateAccount, authSignInWithGoogle } from '../../firebase/firebase';
import { login, serializeUser } from '../../redux/userSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //utilities
    function clearForm() {
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    function getEmailAndPassword() {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        return { email: email, password: password }
    }

    function dispatchToRedux(user) {
        dispatch(login(JSON.stringify(serializeUser(user))))
    }

    //login functions

    async function signInWithEmail(e) {
        e.preventDefault();
        const { email, password } = getEmailAndPassword();
        try {
            const user = await authLoginWithEmailAndPassword(email, password);
            dispatchToRedux(user);
            navigate('/chat');
        } catch (error) {
            setError(error);
            clearForm();
        }
    }

    async function createAccount(e) {
        e.preventDefault();
        const { email, password } = getEmailAndPassword();
        try {
            const user = await authCreateAccount(email, password);
            dispatchToRedux(user);
            navigate('/chat');
        } catch (error) {
            setError(error);
            clearForm();
        }

    }








    return (
        <div className='login-form-container'>

            <img className='login-img' src={image} />

            <form className='login-form'>
                <span className='login-form-text'>Welcome</span>
                {error && <span className='login-error'>{error.message}</span>}
                <input type='email' placeholder='E-mail' ref={emailRef}></input>
                <input type='password' placeholder='Password' ref={passwordRef}></input>
                <button onClick={signInWithEmail}>Log in</button>
                <button onClick={createAccount}>Create Account</button>
                <hr />
                <button>Login with Google</button>
            </form>

        </div>
    )
}
