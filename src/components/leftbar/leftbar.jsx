import './leftbar.css'
import {RssFeed, Chat, SmartDisplay, Groups, CastForEducation, ContactSupport, Bookmarks, Today, Work} from '@mui/icons-material'
import {Users} from "../../SampleData"
import Friends from '../friends/friends'

export default function leftbar() {
  return (
    <div className='leftBar'>
      <div className="leftBarWrap">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <RssFeed className='feedIcon'/>
            <span className="leftBarItemText">
              Feed
            </span>
          </li>
          <li className="leftBarListItem">
            <Bookmarks className='feedIcon'/>
            <span className="leftBarItemText">
              Bookmarks
            </span>
          </li>
          <li className="leftBarListItem">
            <ContactSupport className='feedIcon'/>
            <span className="leftBarItemText">
              Questions
            </span>
          </li>
          <li className="leftBarListItem">
            <Today className='feedIcon'/>
            <span className="leftBarItemText">
              Events
            </span>
          </li>
          <li className="leftBarListItem">
            <Work className='feedIcon'/>
            <span className="leftBarItemText">
              Jobs
            </span>
          </li>
          <li className="leftBarListItem">
            <CastForEducation className='feedIcon'/>
            <span className="leftBarItemText">
              Learning
            </span>
          </li>
          <li className="leftBarListItem">
            <Chat className='feedIcon'/>
            <span className="leftBarItemText">
              Chats
            </span>
          </li>
          <li className="leftBarListItem">
            <SmartDisplay className='feedIcon'/>
            <span className="leftBarItemText">
              Videos
            </span>
          </li>
          <li className="leftBarListItem">
            <Groups className='feedIcon'/>
            <span className="leftBarItemText">
              Groups
            </span>
          </li>
        </ul>
        <button className='leftBarBtn'>Show More</button>
        <hr className='leftBarHr'/>
        <ul className="leftBarFriendList">
          {Users.map(u=>(
            <Friends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
