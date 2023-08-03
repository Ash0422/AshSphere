import './online.css';

export default function online({user}) {
  return (
    <li className="friends">
    <div className="profileImgCon">
      <img className='imgProfileRight' src={user.profilePicture} alt="" />
      <span className="onlineRightBar"></span>
    </div>
    <span className="userNameRight">{user.username}</span>
  </li>
  )
}
