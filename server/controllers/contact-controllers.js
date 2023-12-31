const { createError } = require("../middleware/error-handle");
const ContactModel = require("../models/contact-schema");
// add new contact
const addContactController = async (req, res, next) => {
  const { name, phone } = req.body;
  if (!name || !phone)
    return next(createError("Please fill all the details..."));
  try {
    const addContact = new ContactModel({ ...req.body });
    await addContact.save();
    return res.status(200).json({
      success: true,
      message: "contact added successfull",
      addContact,
    });
  } catch (error) {
    next(createError(error.message, 500, "add controller"));
  }
};

// get all contact
const getAllContactController = async (req, res, next) => {
  const { name } = req.query;
  let query = {};
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  console.log(query);
  try {
    const allContact = await ContactModel.find(query);
    if (!allContact)
      return next(createError("No Contact found", 400, "get all contact"));
    return res.status(200).json({
      success: true,
      message: "fetch all contact",
      allContact,
    });
  } catch (error) {
    return next(createError(error.message, 500, "get contacts"));
  }
};

// single contact
const singleContactController = async (req, res, next) => {
  const { id } = req.params;
  if (!id)
    return next(createError("Id not found", 400, "single contact controler"));
  try {
    const singleContact = await ContactModel.findOne({ _id: id });
    if (!singleContact)
      return next(
        createError("Not contact found", 400, "single contact controller")
      );
    return res.status(200).json({
      success: true,
      message: "single contact fetch",
      singleContact,
    });
  } catch (error) {
    return next(createError(error.message, 500, "single contact controller"));
  }
};
// update controller
const updateContactController = async (req, res, next) => {
  const { id } = req.params;
  try {
    await ContactModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "update successfulll",
    });
  } catch (error) {
    return next(createError(error.message, 500, "update controller"));
  }
};

module.exports = {
  addContactController,
  getAllContactController,
  updateContactController,
  singleContactController,
};
