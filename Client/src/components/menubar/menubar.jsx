import "./menubar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"
import {Link} from "react-router-dom"
export default function menubar() {
  return (
    //  Menu Container
    <div className="menuContainer">

      {/* Menu Bar Left */}
        <div className="menubarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">AshSphere</span>
          </Link>
        </div>
        {/* Menu Bar Center */}
        <div className="menubarCenter">
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search" className="searchInput" />

          </div>
        </div>
        {/* Menu Bar Right  */}
        <div className="menubarRight">
          <div className="menubarLinks">
            <span className="menubarLink">Home</span>
            <span className="menubarLink">Timeline</span>
          </div>
          <div className="menubarIcons">
            <div className="menubarIconItem">
              <Person/>
              <span className="menubarIconBudge">1</span>
            </div>
            <div className="menubarIconItem">
              <Chat/>
              <span className="menubarIconBudge">3</span>
            </div>
            <div className="menubarIconItem">
              <Notifications/>
              <span className="menubarIconBudge">10</span>
            </div>
          </div>
          <img src="/assets/users/user1.jpg" alt="" className="menubarImg" />
        </div>
     
    </div>
  )
}
