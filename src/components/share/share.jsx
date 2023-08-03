import './share.css';
import {InsertPhoto, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function share() {
  return (
    <div className='share'>
      <div className="shareWrap">
        <div className="shareTop">
            <img className='shareUserPic' src="/assets/users/user1.JPG" alt="" />
            <input placeholder="What's in your Mind today?" className='shareInput' />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <InsertPhoto htmlColor='tomato' className='shareIcon'/>
                    <span className='optionText'>Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor='green' className='shareIcon'/>
                    <span className='optionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor='blue' className='shareIcon'/>
                    <span className='optionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor='gold' className='shareIcon'/>
                    <span className='optionText'>Feeling</span>
                </div>
                
            </div>
            <button className='shareBtn'>Share</button>
        </div>
      </div>
    </div>
  )
}
