import React, { useEffect, useState } from 'react';
import './posts.css';
import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import {format} from "timeago.js"

export default function Posts({ post }) {
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`users/${post.userId}`);
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [post.userId]);

  const likesHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='posts'>
      <div className="postsWrap">
        <div className="postsTop">
          <div className="topLeftPost">
            <img className='ProfileImgPost' src={user.profilePicture || publicFolder+"profilePicture.jpg"} alt="" />
            <span className="userNamePost">{user.username}</span>
            <span className="postTime">{format(post.createdAt)}</span>
          </div>
          <div className="topRightPost">
            <MoreVert />
          </div>
        </div>
        <div className="postsCenter">
          <span className="TextPost">{post?.desc}</span>
          <img className='imgPost' src={publicFolder + post.img} alt="" />
        </div>
        <div className="postsBottom">
          <div className="leftBottomPost">
            <img className='likesIcon' src={`${publicFolder}like.png`} onClick={likesHandler} alt="" />
            <img className='likesIcon' src={`${publicFolder}heart.png`} onClick={likesHandler} alt="" />
            <span className="likesCount"> {likes} people liked this </span>
          </div>
          <div className="rightBottomPost">
            <span className="commentsText">{post.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
