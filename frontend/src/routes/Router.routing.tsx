import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Dashboard } from "../pages";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Navbar from "../components/NavBar/NavBar";

const Router = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
