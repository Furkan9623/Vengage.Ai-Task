const express = require("express");
const {
  addContactController,
  getAllContactController,
  updateContactController,
  singleContactController,
} = require("../controllers/contact-controllers");
const contact_router = express.Router();
// add contact
contact_router.post("/add-contact", addContactController);
// get all contact
contact_router.get("/all-contacts", getAllContactController);
// single contact
contact_router.get("/single-contact/:id", singleContactController);
// update contact
contact_router.patch("/update-contact/:id", updateContactController);
module.exports = contact_router;
