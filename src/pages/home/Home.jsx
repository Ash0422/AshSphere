import './home.css'
import Menubar from "../../components/menubar/menubar"
import Leftbar from "../../components/leftbar/leftbar"
import Centerbar from "../../components/centerbar/feed"
import Rightbar from "../../components/rightbar/rightbar"


export default function Home() {
  return (
    <>
        <Menubar/>
        <div className="homeContainer">
        <Leftbar/>
        <Centerbar/>
        <Rightbar/>

        </div>
       
    </>
    )
}

