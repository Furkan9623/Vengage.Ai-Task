import { AppBar, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { loadingContext } from "../context/MyContext";
const Navbar = () => {
  const { loadingFunction } = useContext(loadingContext);
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">HOME</Link>
        <Link to="/add-contact" onClick={() => loadingFunction()}>
          ADD CONTACT
        </Link>
        <Link to="/all-contacts">ALL CONTACTS</Link>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
