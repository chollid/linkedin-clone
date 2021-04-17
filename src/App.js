import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Feed from './Feed.jsx';

function App() {
  return (
    <div className="app">

      <Header/> 

      {/* App Body */} 
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
        
    </div>
  );
}

export default App;
