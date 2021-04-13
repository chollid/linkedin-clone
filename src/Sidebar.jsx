import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Chris Holliday</h2>
                <h4>chris@weboratory.dev</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,311
                    </p>
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">
                        1,799
                    </p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
