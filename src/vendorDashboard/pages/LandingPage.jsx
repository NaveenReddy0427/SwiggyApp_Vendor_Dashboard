import AddFirm from "../components/forms/AddFirm"
import AddProduct from "../components/forms/AddProduct"
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
            <AddFirm/>
            <AddProduct/>
        </div>
    </div>
  )
}

export default LandingPage