import { createContext, useContext, useState } from "react";

const contactContext = createContext(null);
const loadingContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(false);

  function loadingFunction() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <loadingContext.Provider value={{ loading, setLoading, loadingFunction }}>
      <contactContext.Provider value={{ contact, setContact }}>
        {children}
      </contactContext.Provider>
    </loadingContext.Provider>
  );
};

export { contactContext, ContextProvider, loadingContext };
