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
import './feed.css';
import Share from '../share/share';
import Post from '../posts/posts';
import { useEffect, useState } from 'react';
import axios from "axios"


export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/64d1405548e977fe8e081753");


      setPosts(res.data);

    };
    
    fetchPosts();
  },[]);
  return (
    <div className='centerBar'>
      <div className="centerWrapp">
        <Share/>
        {posts.map((p) => (
          <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}

