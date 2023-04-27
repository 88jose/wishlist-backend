import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
   const { loginWithRedirect } = useAuth0()
   return (
      <div>
         <h1>You tasklist</h1> 

         <button onClick={() =>loginWithRedirect()}>Login</button>
      </div>
   )
}

export default Login