import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // Define and immediately invoke the async function
    async function getToken() {
      const token = await localStorage.getItem("token"); // Corrected the key name
      console.log(token);
      if(!token){
       navigate("/login")
      }
    }
    getToken();
  }, []); 
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
