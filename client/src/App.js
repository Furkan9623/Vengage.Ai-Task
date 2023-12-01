import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import AllContact from "./pages/AllContact";
import UpdateContact from "./pages/UpdateContact";
import { loadingContext } from "./context/MyContext";
import { useContext } from "react";
import Spinner from "./components/Spinner";
function App() {
  const { loading } = useContext(loadingContext);
  return (
    <div className="App" style={{ marginTop: "5rem" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-contact"
          element={loading ? <Spinner /> : <AddContact />}
        />
        <Route path="/all-contacts" element={<AllContact />} />
        <Route path="/update" element={<UpdateContact />} />
      </Routes>
    </div>
  );
}

export default App;
