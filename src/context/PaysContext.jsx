import { createContext, useEffect, useState } from "react";

export const PaysContext = createContext();

export const PaysProvider = ({ children }) => {
  const [pays, setPays] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchPays = async () => {
      const response = await fetch("http://localhost/back-quizz/getPays.php");
      const data = await response.json();
      setPays(data.pays);
      setLoading(false)
    };

    fetchPays();
  }, []);

  return <PaysContext.Provider value={{pays, loading}}>{children}</PaysContext.Provider>;
};
