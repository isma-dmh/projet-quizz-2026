import { createContext, useEffect, useState } from "react";

export const PaysContext = createContext();

export const PaysProvider = ({ children }) => {
  const [pays, setPays] = useState([]);

  useEffect(() => {
    const fetchPays = async () => {
      const response = await fetch("http://localhost/back-quizz/getPays.php");
      const data = await response.json();
      setPays(data);
    };

    fetchPays();
  }, []);

  return <PaysContext.Provider value={pays}>{children}</PaysContext.Provider>;
};
