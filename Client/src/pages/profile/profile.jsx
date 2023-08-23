import './profile.css';
import MenuBar from "../../components/menubar/menubar"
import LeftBar from "../../components/leftbar/leftbar"
import CenterBar from "../../components/centerbar/feed"
import RightBar from "../../components/rightbar/rightbar"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function Profile() {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const res = await axios.get(`/users/${username}`);
        const res = await axios.get(`/users/${username}`);

        console.log('User Data:', res.data);
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <>
    <MenuBar/>
    <div className="Profile">
    <LeftBar/>
    <div className="profileRight">
        <div className="topRightProfile">
            <div className="profileCoverCont">
              
            <img className='coverImg' src={user.coverPicture ? publicFolder + user.coverPicture : publicFolder + "cover.jpg"} alt="" />
            <img className='userImg' src={user.profilePicture ? publicFolder + user.profilePicture : publicFolder + "profilePicture.jpg"} alt="" />

            </div>
           <div className="userInfo">
            <h4 className='userInfoName'>{user.username}</h4>
            <span className='userInfoDesc'>{user.desc}</span>
           </div>
        </div>
        <div className="bottomRightProfile">
            <CenterBar username={username}/>
            <RightBar user={user}/>
        </div>
    

    </div>
    </div>
</>
  );
}
