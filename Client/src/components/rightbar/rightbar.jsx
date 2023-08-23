import './rightbar.css'
import {Users} from "../../SampleData"
import Online from '../../components/online/online'

export default function rightBar({user}) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
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
          <span className="infoItemKey">{user.city}</span>
        </div>
        <div className="infoItemList">
          <span className="infoItemCity">From:</span>
          <span className="infoItemKey">{user.from}</span>
        </div>
        <div className="infoItemList">
          <span className="infoItemCity">Relationship:</span>
          <span className="infoItemKey">
              {user.relationship === 1 ? "Single"
              : user.relationship === 2 ? "Married"
              : user.relationship === 3 ? "Divorced"
              : "-"
              }
          </span>

        </div>
      </div>
      <h4 className='rightBarTitle'>User Friends</h4>
      <div className="following">
        <div className="followings">
          <img src={`${publicFolder}users/user2.jpg`} alt="" className="followingImg" />
          <span className="followerUsername">Haroun Ramoul</span>
        </div>
        <div className="followings">
          <img src={`${publicFolder}users/user4.jpg`} alt="" className="followingImg" />
          <span className="followerUsername">Sami Remili</span>
        </div>
        <div className="followings">
          <img src={`${publicFolder}users/user6.jpg`} alt="" className="followingImg" />
          <span className="followerUsername">Daniel Conditt</span>
        </div>
        <div className="followings">
          <img src={`${publicFolder}users/user8.jpg`} alt="" className="followingImg" />
          <span className="followerUsername">Mouhamed Chibane</span>
        </div>
        <div className="followings">
          <img src={`${publicFolder}users/user9.jpg`} alt="" className="followingImg" />
          <span className="followerUsername">Ali Smaala</span>
        </div>
        <div className="followings">
          <img src={`${publicFolder}users/user10.jpg`} alt="" className="followingImg" />
          <span className="followerUsername">Aziz Smaala</span>
        </div>
      </div>
      </>
    
      )
  }
  return (
    <div className='rightBar'>
      <div className="rightBarWrap">
        {user ? <ProfileRightBar/> : <HomeRightBar/>}
   
      </div>
    </div>
  )
}

