
const Register = () => {
  return (
    <div className="registerSection">
        <form>
            <h3>Vendor Regiter</h3>
            <label>Username</label>
            <input type="text" placeholder="Enter your username"/><br/>
            <label>Email</label>
            <input type="email" placeholder="Enter your email"/><br/>
            <label>Password</label>
            <input type="password" placeholder="Enter your password"/><br/>
            <div className="btnSubmit">
                <button>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register