import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function useUser() {
  const { user }: any = useAuth0();

  const { VITE_APP_SERVICE_URL } = import.meta.env;

  const checkUser = async () => {
    try {
      const response = await axios.post(`${VITE_APP_SERVICE_URL}/user/check`, {
        name: user.name,
        email: user.email,
      });
      const data = response.data;
      window.localStorage.setItem("userID", data.id);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return { checkUser };
}

export default useUser;
