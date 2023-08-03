import React, { useState } from 'react';
import './posts.css';
import { MoreVert } from '@mui/icons-material';
import {Users} from '../../SampleData'

export default function Posts({post}) {
 const [likes,setLikes] = useState(post.likes)
 const [isLiked,setIsLiked] = useState(false)

 const likesHandler = ()=> {
  setLikes(isLiked ? likes-1 : likes+1)
  setIsLiked(!isLiked)
 }
  return (
    <div className='posts'>
      <div className="postsWrap">
        <div className="postsTop">
            <div className="topLeftPost">
                <img className='ProfileImgPost' src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" />
                <span className="userNamePost">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                <span className="postTime">{post.time}</span>
            </div>
            <div className="topRightPost">
                <MoreVert/>

            </div>
        </div>
        <div className="postsCenter">
            <span className="TextPost">{post?.desc}</span>
            <img className='imgPost' src={post.photo} alt="" />
        </div>
        <div className="postsBottom">
            <div className="leftBottomPost">
                <img className='likesIcon' src="/assets/like.png" onClick={likesHandler} alt="" />
                <img className='likesIcon' src="/assets/heart.png" onClick={likesHandler} alt="" />
                <span className="likesCount"> {likes} people liked this </span>
            </div>
            <div className="rightBottomPost">
                <span className="commentsText">{post.comments} comments</span>

            </div>
        </div>
      </div>
    </div>
  )
}
