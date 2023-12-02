import { useContext, useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import { Box, TextField } from "@mui/material";
import { allContacts } from "../api/contact-api";
import { contactContext, loadingContext } from "../context/MyContext";
import Spinner from "../components/Spinner";
const AllContact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { contact, setContact } = useContext(contactContext);
  const { loading, setLoading } = useContext(loadingContext);
  const getAllContacts = async () => {
    setLoading(true);
    const result = await allContacts(searchQuery);
    setLoading(false);
    console.log(result);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? setContact(result?.data?.allContact)
      : error
      ? alert(error)
      : alert(result?.message);
  };
  useEffect(() => {
    getAllContacts();
  }, [searchQuery]);

  // debounce
  const Debounce = (fn, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const handleSearchNumber = (e) => {
    setSearchQuery(e.target.value);
  };
  const magicFunc = Debounce(handleSearchNumber, 1000);
  return (
    <>
      <Box
        sx={{
          width: "60%",
          margin: "auto",
        }}
      >
        <TextField
          fullWidth
          size="small"
          label="Search Contact by name......"
          onChange={magicFunc}
        />
        {loading ? (
          <Spinner />
        ) : (
          <>
            {contact?.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  margin: "auto",
                  marginTop: "2rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {contact?.map((elem) => {
                  return <SingleCard key={elem._id} elem={elem} />;
                })}
              </Box>
            ) : (
              <h2>No Contact found</h2>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default AllContact;
