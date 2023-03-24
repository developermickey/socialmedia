import "./login.css"

export default function Login() {
  return (
    <div className="login">
       <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">
                Social App
            </h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Social App
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" type="text" className="loginInput" />
                <input placeholder="Password" type="text" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForget">Forget Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
       </div>
      
    </div>
  )
}
