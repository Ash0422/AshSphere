import './profile.css';
import Menubar from "../../components/menubar/menubar"
import Leftbar from "../../components/leftbar/leftbar"
import Centerbar from "../../components/centerbar/feed"
import Rightbar from "../../components/rightbar/rightbar"

export default function profile() {
  return (
    <>
    <Menubar/>
    <div className="Profile">
    <Leftbar/>
    <div className="profileRight">
        <div className="topRightProfile">
            <div className="profileCoverCont">
            <img className='coverImg' src="/assets/posts/post4.jpg" alt="" />
            <img className='userImg' src="/assets/users/user1.jpg" alt="" />
            </div>
           <div className="userInfo">
            <h4 className='userInfoName'>Achraf Chibane</h4>
            <span className='userInfoDesc'>Hello my dear friends</span>
           </div>
        </div>
        <div className="bottomRightProfile">
            <Centerbar/>
            <Rightbar profile/>
        </div>
    

    </div>
    </div>
</>
  );
}
