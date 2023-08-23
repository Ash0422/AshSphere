// import './feed.css';
// import Share from '../share/share';
// import Post from '../posts/posts';
// import { useEffect, useState } from 'react';
// import axios from "axios";

// export default function Feed({ username }) {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     console.log("Username prop:", username); // Log the username prop
//     const fetchPosts = async () => {
//       try {
//         const res = username 
//           ? await axios.get(`/posts/profile/${username}`)
//           : await axios.get("/posts/timeline/64e4f2157ba7cd77db0521a5");

//         setPosts(res.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, [username]);

//   return (
//     <div className='centerBar'>
//       <div className="centerWrapp">
//         <Share />
//         {posts.map((p) => (
//           <Post key={p._id} post={p} username={username} />
//         ))}
//       </div>
//     </div>
//   );
// }
import './feed.css';
import Share from '../share/share';
import Post from '../posts/posts';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Username prop:", username); // Log the username prop
    const fetchPosts = async () => {
      try {
        const res = username 
          ? await axios.get(`/posts/profile/${username}`)
          : await axios.get("/posts/timeline/64e4f2157ba7cd77db0521a5");

        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [username]);

  return (
    <div className='centerBar'>
      <div className="centerWrapp">
        <Share />
        {posts.map((p) => (
          // Make sure to pass the username prop here
          <Post key={p._id} post={p} username={username} />
        ))}
      </div>
    </div>
  );
}
