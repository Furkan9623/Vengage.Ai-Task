import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContacts } from "../api/contact-api";
const ContactForm = ({ isUpdate }) => {
  const [formInput, setFormInput] = useState({ name: "", phone: "" });
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const addFormSubmitForm = async (e) => {
    e.preventDefault();
    const result = await addContacts(formInput);
    const error = result?.response?.data?.message;
    return result?.status === 200 ? navigate("/all-contacts") : alert(error);
  };
  return (
    <Box
      sx={{
        boxShadow: "0 0 5px grey",
        width: "25rem",
        padding: "2rem",
        margin: "auto",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={addFormSubmitForm}
      >
        <Typography variant="h4">
          {isUpdate ? "UPDATE CONTACT" : "ADD CONTACT"}
        </Typography>
        <TextField
          name="name"
          size="small"
          label="Enter name....."
          onChange={handleChange}
        />
        <TextField
          name="phone"
          size="small"
          label="Enter phone......"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color={isUpdate && "secondary"}
          size="small"
          sx={{ fontWeight: 600 }}
          type="submit"
        >
          {isUpdate ? "UPDATE CONTACT" : "ADD CONTACT"}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
