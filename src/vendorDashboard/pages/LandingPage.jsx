import Login from "../components/forms/Login"
import Register from "../components/forms/Register"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

const LandingPage = () => {
  return (
    <div className="landingSection">
        <NavBar/>
        <div className="collectionSection">
            <SideBar/>
            <Login/>
            <Register/>
        </div>
    </div>
  )
}

export default LandingPage