import axios from "axios";
const URL = "http://localhost:8080/api/v1/contact";
// get all contact
const allContacts = async (query) => {
  return axios
    .get(`${URL}/all-contacts?name=${query}`)
    .then((res) => res)
    .catch((er) => er);
};
const addContacts = async (data) => {
  return axios
    .post(`${URL}/add-contact`, data)
    .then((res) => res)
    .catch((er) => er);
};

const singleContact = async (id) => {
  return axios
    .get(`${URL}/single-contact/${id}`)
    .then((res) => res)
    .catch((er) => er);
};

const updateContact = async (id, data) => {
  return axios
    .patch(`${URL}/update-contact/${id}`, data)
    .then((res) => res)
    .catch((er) => er);
};
export { allContacts, addContacts, singleContact, updateContact };
