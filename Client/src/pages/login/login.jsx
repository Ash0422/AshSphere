
// import './login.css';
// import React, { useContext, useRef } from 'react';
// import {loginCalls} from '../../apiCalls'
// import {AuthContext} from "../../context/AuthContext"
// import {CircularProgress} from "@material-ui/core"
// export default function Login() { // Renamed to start with an uppercase letter
//   const email = useRef();
//   const password = useRef();
//   const {user, isFetching, error, dispatch} = useContext(AuthContext)

//   const handleClick = (e) => {
//     e.preventDefault();
//     loginCalls({email:email.current.value,password:password.current.value},dispatch)
//   }
//   console.log(user)

//   return (
//     <div className='login'>
//       <div className="loginWrap">
//         <div className="loginLeft">
//           <h3 className="loginLogo"> AshSphere </h3>
//           <span className="loginDesc">Engage with pals and embrace the global community through AshSphere.</span>
//         </div>
//         <div className="loginRight">
//           <form className="loginInfo" onSubmit={handleClick}>
//             <input placeholder="Email" type="email" required className="loginInput" ref={email} />
//             <input placeholder="Password" type="password" required minLength='6' className="loginInput" ref={password} />
//             <button className="loginBtn">{isFetching ? <CircularProgress color="success" size="15px"/> : "Login"}</button>
//             <span className="loginForget">Forget Password</span>
//             <button className="signUpBtn">Sign Up</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
import './login.css';
import React, { useContext, useRef } from 'react';
import { loginCalls } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCalls({ email: email.current.value, password: password.current.value }, dispatch);
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginLeft">
          <h3 className="loginLogo"> AshSphere </h3>
          <span className="loginDesc">Engage with pals and embrace the global community through AshSphere.</span>
        </div>
        <div className="loginRight">
          <form className="loginInfo" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginBtn" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress color="success" size="20px" /> : "Login"}</button>
            <span className="loginForget">Forget Password</span>
            <button className="signUpBtn">{isFetching ? <CircularProgress color="success" size="20px" /> : "Sign Up"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
