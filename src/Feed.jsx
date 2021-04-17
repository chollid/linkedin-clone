import React, { useState } from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption';
import Post from './Post.jsx';

function Feed() {
    const [posts, setPosts] = useState([])


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#e34b8a'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#72dbb9'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#6877d9'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#f2d546'/>
                </div>
            </div>

            {/* Posts */}
            <Post name="Chris Holliday" description="test this is" message="Wow this worked?" photoUrl=""/>
        </div>
    )
}

export default Feed
