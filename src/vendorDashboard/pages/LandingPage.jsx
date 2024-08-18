import Login from "../components/forms/Login"
import Register from "../components/forms/Register"
import NavBar from "../components/NavBar"

const LandingPage = () => {
  return (
    <div className="landingSection">
        <NavBar/>
        <div className="collectionSection">
            <Login/>
            <Register/>
        </div>
    </div>
  )
}

export default LandingPage