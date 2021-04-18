import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice'
import './Login.css';
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    // *** Dispatch ACtion into Redux Store --------//
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault(); 
    };
    
    const register = () => {
        if (!name) {
            return alert("Don't be anonymous! Please give us your full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            });
        }).catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="logo"/>

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>

                <input value={profilePic} onChange={e => setProfilePic(e => e.target.value)} placeholder="Profile pic URL (optional)" type="text"/>

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" type="email"/>
                
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password"/>

                <button type="submit" onClick={loginToApp} >Sign In</button>
            </form>

            <p>Not a member?{"  "}
                <span className="login__register" onClick={register} >Register Now</span>
            </p>
        </div>
    )
}

export default Login
