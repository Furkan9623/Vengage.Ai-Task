const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name field required...."] },
    phone: {
      type: String,
      required: [true, "Phone number is required...."],
      validate: {
        validator: function (value) {
          return /^\d{10}$/.test(value);
        },
        message: "Phone number must be a 10-digit number.",
      },
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("Contact", contactSchema);
module.exports = ContactModel;
