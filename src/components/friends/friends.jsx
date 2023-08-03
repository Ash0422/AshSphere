import './friends.css';


export default function friends({user}) {
  return (
    <li className="leftBarfFriend">
        <img className='LeftBarFiendPics' src={user.profilePicture} alt="" />
        <span className="leftBarFriendName">{user.username}</span>
    </li>
  )
}
