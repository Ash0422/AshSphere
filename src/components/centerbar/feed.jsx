// import './feed.css'
// import Share from '../share/share'
// import Post from '../posts/posts'
// import {PostS} from '../../SampleData'

// export default function feed() {
//   return (
//     <div className='centerBar'>
//       <div className="centerWrapp">
//         <Share/>
//         {Posts.map((p) => (

//         <Post key={p.id} post={p}/>
//         ))}
        
//       </div>
//     </div>
//   )
// }
import './feed.css'
import Share from '../share/share'
import Post from '../posts/posts'
import {Posts} from '../../SampleData'

export default function feed() {
  return (
    <div className='centerBar'>
      <div className="centerWrapp">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

