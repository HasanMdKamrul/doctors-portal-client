import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoadimg] = useState(true);

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/users/admin/${email}`
        );
        const data = await response.json();
        setIsAdmin(data?.isAdmin);
        setIsLoadimg(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadAdmin();
  }, [email]);

  return [isAdmin, isLoading];
};

export default useAdmin;
