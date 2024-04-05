import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

const NavBar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <br></br>
    <Link to="/books">Book List</Link>
    <br></br>
    <Link to="/signup">Register An Account!</Link>
    </>
  )
}

export default NavBar