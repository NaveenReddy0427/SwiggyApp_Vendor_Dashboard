
const Login = () => {
  return (
    <div className="loginSection">
        <form className="authForm">
            <h3>Vendor Login</h3>
            <label>Email</label><br/>
            <input type="email" placeholder="Enter your email"/><br/>
            <label>Password</label><br/>
            <input type="password" placeholder="Enter your password"/><br/>
            <div className="btnSubmit">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login