import React from 'react'
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png" alt="logo"/>

            <form>
                <input placeholder="Full name (required if registering)" type="text"/>
            </form>
        </div>
    )
}

export default Login
