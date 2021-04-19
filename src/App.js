import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
<<<<<<< HEAD
import Feed from './Feed.jsx';
import Login from './Login.jsx';
import { auth } from './firebase';
=======
>>>>>>> parent of 3244714... Added Post component

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else {
        //user logged out
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">

      <Header/> 

      {!user ? <Login /> : (
      <div className="app__body">
        <Sidebar />
      </div>
      )}

        
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
