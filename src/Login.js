import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__logo"></div>
            <form className="login__container">
                <h1 className="login__heading">Login</h1>
                <div className="login__field__wrapper">
                    <label className="login__label">Email Address</label>
                    <input className="login__field" type="email" />
                </div>
                <div className="login__field__wrapper">
                    <label className="login__label">Password</label>
                    <input className="login__field"  type="password" />
                </div>
                <input className="login__button-signin" value="Login" type="submit" />
                <p className="login__policy">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <input className="login__button-create" value="Create your amazon account" type="submit" />
            </form>
        </div>
    )
}

export default Login;
