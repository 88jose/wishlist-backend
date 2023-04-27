import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
   const { logout } = useAuth0()

   return (
      <div>
         <Link to={'/'}> Login </Link>
         <Link to={'/home'}> Home </Link>
         <Link to={'/dashboard'}> Dashboard </Link>
         <button onClick={() =>logout({logoutParams:{returnTo:window.location.origin}})}>Logout</button>
      </div>
   )
}

export default NavBar;