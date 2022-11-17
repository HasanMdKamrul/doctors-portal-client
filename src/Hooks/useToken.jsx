import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  console.log(email);
  useEffect(() => {
    const getToken = async (email) => {
      try {
        console.log(email);
        const response = await fetch(
          `http://localhost:15000/jwt?email=${email}`,
          {
            method: "POST",
          }
        );
        const data = await response.json();
        if (data.success) {
          const accessToken = data.token;
          localStorage.setItem("token", accessToken);
          setToken(accessToken);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getToken(email);
  }, [email]);

  return [token];
};

export default useToken;
