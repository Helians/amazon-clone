import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import {
    useHistory
} from "react-router-dom";


function Login() {

    const history = useHistory();

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // direct to home ppage
                history.push('/');
            })
            .catch(e => {
                alert(e.message)
            });
    }

    const signup = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // direct to home ppage
                history.push('/');
            })
            .catch(e => {
                alert(e.message)
            });
    }

    return (
        <div className="login">
            <div className="login__logo"></div>
            <form className="login__container">
                <h1 className="login__heading">Login</h1>
                <div className="login__field__wrapper">
                    <label className="login__label">Email Address</label>
                    <input className="login__field" value={email} onChange={(e) => setemail(e.target.value)} type="email" />
                </div>
                <div className="login__field__wrapper">
                    <label className="login__label">Password</label>
                    <input className="login__field" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <input className="login__button-signin" value="Login" type="submit" onClick={login} />
                <p className="login__policy">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <input className="login__button-create" value="Create your amazon account" type="submit" onClick={signup} />
            </form>
        </div>
    )
}

export default Login;
