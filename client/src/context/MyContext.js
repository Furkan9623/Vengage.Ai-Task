import { createContext, useContext, useState } from "react";

const contactContext = createContext(null);
const loadingContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadingFunction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <contactContext.Provider value={{ contact, setContact }}>
      <loadingContext.Provider value={{ loading, setLoading, loadingFunction }}>
        {children}
      </loadingContext.Provider>
    </contactContext.Provider>
  );
};

export { contactContext, ContextProvider, loadingContext };
