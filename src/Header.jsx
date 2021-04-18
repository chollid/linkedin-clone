import React from 'react'
import './Header.css';
import HeaderOption from './HeaderOption';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linked In"/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon}title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon}title='Jobs' />
                <HeaderOption Icon={ChatIcon}title='Messaging' />
                <HeaderOption Icon={NotificationsIcon}title='Notifications' />
                <HeaderOption avatar='https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png' title="Me" />

            </div>
        </div>
    )
}

export default Header
