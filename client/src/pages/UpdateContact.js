import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import { singleContact } from "../api/contact-api";

const UpdateContact = () => {
  const [singleContacts, setSingleContacts] = useState({});
  const { id } = useParams();
  const fetchSingleContact = async () => {
    const result = await singleContact(id);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? setSingleContacts(result?.data?.singleContact)
      : error
      ? alert(error)
      : alert(result?.message);
  };
  useEffect(() => {
    fetchSingleContact();
  }, []);
  return <ContactForm isUpdate={true} singleContacts={singleContacts} />;
};

export default UpdateContact;
