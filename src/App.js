import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Feed from './Feed.jsx';
import Login from './Login.jsx';

function App() {
  const user = useSelector(selectUser)


  return (
    <div className="app">

      <Header/> 

      {!user ? (<Login />) : (
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
      )}

        
    </div>
  );
}

export default App;
