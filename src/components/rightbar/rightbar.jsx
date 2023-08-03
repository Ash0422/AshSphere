import './rightbar.css'
import {Users} from "../../SampleData"
import Online from '../../components/online/online'

export default function rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightBarWrap">
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
      </div>
    </div>
  )
}

