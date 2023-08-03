import './login.css'

export default function login() {
  return (
    <div className='login'>
      <div className="loginWrap">
        <div className="loginLeft">
            <h3 className="loginLogo"> AshSphere </h3>
            <span className="loginDesc">Engage with pals and embrace the global community through AshSphere.</span>
        </div>
        <div className="loginRight">
            <div className="loginInfo">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginBtn">Login</button>
                <span className="loginForget">Forget Password</span>
                <button className="signUpBtn">Sign Up</button>
            </div>
        </div>
      </div>
    </div>
  )
}
