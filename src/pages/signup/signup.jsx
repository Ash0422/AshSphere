import './signup.css'

export default function signup() {
  return (
    <div className='login'>
      <div className="loginWrap">
        <div className="loginLeft">
            <h3 className="loginLogo"> AshSphere </h3>
            <span className="loginDesc">Engage with pals and embrace the global community through AshSphere.</span>
        </div>
        <div className="loginRight">
            <div className="loginInfo">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginBtn">Sign Up</button>
                
                <button className="signUpBtn">Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}
