import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core';
import './Post.css';
import InputOption from './InputOption';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { db } from './firebase';

const Post = forwardRef(({ name, description, message, photoUrl, deletePost }, ref) => {


    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name.split(" ").map(name => name[0])}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div onClick={deletePost} className="post__delete">
                <DeleteForeverIcon />
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__divider">
              
            </div>

            <div className="post__buttons">
                <InputOption  Icon={ThumbUpAltOutlinedIcon} title="Like" color="#0077B7" />
                <InputOption  Icon={ChatOutlinedIcon} title="Comment" color="#0077B7" />
                <InputOption  Icon={ShareOutlinedIcon} title="Share" color="#0077B7" />
                <InputOption  Icon={SendOutlinedIcon} title="Send" color="#0077B7" />
            </div>
        </div>
    )
})

export default Post
