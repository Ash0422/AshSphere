// import { useRef } from 'react';
// import './signup.css'

// export default function signup() {
//   const username = useRef();
//   const email = useRef();
//   const password = useRef();
//   const passwordAgain = useRef();

//   const handleClick = (e) => {
//     e.preventDefault();
//     if(passwordAgain.current.value !== password.current.value) 
//     password.current.setCustomValidity("Oops! Your passwords don't match.");


//   return (
//     <div className='login'>
//       <div className="loginWrap">
//         <div className="loginLeft">
//             <h3 className="loginLogo"> AshSphere </h3>
//             <span className="loginDesc">Engage with pals and embrace the global community through AshSphere.</span>
//         </div>
//         <div className="loginRight">
//             <form className="loginInfo"onSubmit={handleClick}>
//                 <input placeholder="Username" required ref={username} className="loginInput" />
//                 <input placeholder="Email" required ref={email} className="loginInput" type='email' />
//                 <input placeholder="Password" required ref={password} className="loginInput" type='password' minLength="6" />
//                 <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type='password' />
//                 <button className="loginBtn" type='submit'>Sign Up</button>
                
//                 <button className="signUpBtn">Login</button>
//             </form>
//         </div>
//       </div>
//     </div>
//   );
//   }
import { useRef } from 'react';
import './signup.css';
import axios from 'axios';
import {useHistory} from "react-router-dom"

export default function Signup() { // Make sure your component starts with an uppercase letter
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Oops! Your passwords don't match.");
    }else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
        await axios.post("/auth/register", user);
        history.push("/login");

      }catch(err) {
        console.log(err)
      }
      
    }
  };

  return (
    <div className='login'>
      <div className="loginWrap">
        <div className="loginLeft">
          <h3 className="loginLogo"> AshSphere </h3>
          <span className="loginDesc">Engage with pals and embrace the global community through AshSphere.</span>
        </div>
        <div className="loginRight">
          <form className="loginInfo" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} className="loginInput" type='email' />
            <input placeholder="Password" required ref={password} className="loginInput" type='password' minLength="6" />
            <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type='password' />
            <button className="loginBtn" type='submit'>Sign Up</button>

            <button className="signUpBtn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

