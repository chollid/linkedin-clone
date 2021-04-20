import React from 'react'
import './Header.css';
import HeaderOption from './HeaderOption';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';




function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

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
                <HeaderOption Icon={HomeOutlinedIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon}title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon}title='Jobs' />
                <HeaderOption Icon={ChatIcon}title='Messaging' />
                <HeaderOption Icon={NotificationsActiveOutlinedIcon}title='Notifications' />
                {/* <HeaderOption avatar={user ? user.photoUrl : null} title="Me" onClick={logoutOfApp} /> */}
                <HeaderOption avatar={user && user.photoUrl ? user.photoUrl :  'https://i.pinimg.com/736x/ee/84/b2/ee84b2357fe3c04ac3ce2bf7ead4a31f.jpg'} title={user ? user.displayName.split(' ')[0]: "Me"} onClick={logoutOfApp} />

            </div>
        </div>
    )
}

export default Header
