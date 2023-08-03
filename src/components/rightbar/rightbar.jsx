import './rightbar.css'
import {Users} from "../../SampleData"
import Online from '../../components/online/online'

export default function rightbar({profile}) {

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthContainer">
          <img className='birthImg' src="/assets/giftBox.png" alt="" />
          <span className="birthText">
            <b>Daniel Conditt</b> and <b>5 others</b> have a birthday today</span>
        </div>
        <img className='AdsRightBar' src="/assets/ad.jpg" alt="" />
        <h4 className="titleRight">Online Friends</h4>
        <ul className="friendListRight">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>

    );
  };

  const ProfileRightBar = () =>{
    return (
      <>
      <h4 className='rightBarTitle'>User Information</h4>
      <div className="rightInfo">
        <div className="infoItemList">
          <span className="infoItemCity">City:</span>
          <span className="infoItemKey">Phoenix</span>
        </div>
        <div className="infoItemList">
          <span className="infoItemCity">From:</span>
          <span className="infoItemKey">Algeria</span>
        </div>
        <div className="infoItemList">
          <span className="infoItemCity">Relationship:</span>
          <span className="infoItemKey">Married</span>
        </div>
      </div>
      <h4 className='rightBarTitle'>User Friends</h4>
      <div className="following">
        <div className="followings">
          <img src="/assets/users/user2.jpg" alt="" className="followingImg" />
          <span className="followerUsername">Brigitte Chibane</span>
        </div>
        <div className="followings">
          <img src="/assets/users/user4.jpg" alt="" className="followingImg" />
          <span className="followerUsername">Brigitte Chibane</span>
        </div>
        <div className="followings">
          <img src="/assets/users/user6.jpg" alt="" className="followingImg" />
          <span className="followerUsername">Brigitte Chibane</span>
        </div>
        <div className="followings">
          <img src="/assets/users/user8.jpg" alt="" className="followingImg" />
          <span className="followerUsername">Brigitte Chibane</span>
        </div>
        <div className="followings">
          <img src="/assets/users/user9.jpg" alt="" className="followingImg" />
          <span className="followerUsername">Brigitte Chibane</span>
        </div>
        <div className="followings">
          <img src="/assets/users/user10.jpg" alt="" className="followingImg" />
          <span className="followerUsername">Brigitte Chibane</span>
        </div>
      </div>
      </>
    
      )
  }
  return (
    <div className='rightBar'>
      <div className="rightBarWrap">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
   
      </div>
    </div>
  )
}

