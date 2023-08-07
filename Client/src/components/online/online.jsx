import './online.css';

export default function online({user}) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="friends">
    <div className="profileImgCon">
      <img className='imgProfileRight' src={publicFolder+user.profilePicture} alt="" />
      <span className="onlineRightBar"></span>
    </div>
    <span className="userNameRight">{user.username}</span>
  </li>
  )
}
