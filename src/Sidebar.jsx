import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'


function Sidebar() {

    const recentItem = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.crushpixel.com/big-static16/preview4/hippie-hand-drawn-doodle-banner-2393015.jpg" alt=""/>
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
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">
                        1,799
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                <div className="recentItems">
                    <div className="sidebar__recentItem"><p><span>#</span>reactjs</p></div>
                    <div className="sidebar__recentItem"><p><span>#</span>programming</p></div>
                    <div className="sidebar__recentItem"><p><span>#</span>redux</p></div>
                    <div className="sidebar__recentItem"><p><span>#</span>softwareengineering</p></div>
                    <div className="sidebar__recentItem"><p><span>#</span>development</p></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
