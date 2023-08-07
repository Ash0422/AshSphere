import './friends.css';


export default function friends({user}) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="leftBarfFriend">
        <img className='LeftBarFiendPics' src={publicFolder+user.profilePicture} alt="" />
        <span className="leftBarFriendName">{user.username}</span>
    </li>
  )
}
