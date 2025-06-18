import CONTACTUS from "../models/CONTACTUS.js";

export const createContacts = async (req, res, next) => {
  try {
    const { name, company, phone, email, subject, message } = req.body;
    if (!name || !company || !phone || !email || !subject || !message)
      return res.status(404).json({ message: "Entre all the fields" });

    const newContact = new CONTACTUS({ name, company, phone, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Contact created successfully", contact: newContact });

  } catch (err) {
    next(err);
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await CONTACTUS.find();

    if (!contacts) {
      return res.status(404).json({ message: "No contacts found" });
    }

    res.status(200).json({
      message: "Contacts fetched successfully",
      contacts,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res.status(400).json({ message: "Contact ID is required" });
    }

    const contact = await CONTACTUS.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ message: "No contact found with this ID" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

export const ContactCount = async (req, res, next) => {
  try {
    const count = await CONTACTUS.countDocuments(); // Correct way to get count

    if (count === 0)
      return res.status(404).json({ message: "No contact found" });

    return res.status(200).json({ message: "contact count", data: count });
  } catch (err) {
    next(err);
  }
};


export const getLatestcontact = async (req, res) => {
  try {
    const blogs = await CONTACTUS.find()
      .sort({ createdAt: -1 }) // Sort by descending order of createdAt
      .limit(10); 

    if (!blogs) {
      return res.status(202).json({ message: "No contact Found", data: [] });
    }

    return res
      .status(200)
      .json({ success: true, message: "Latest  contact", data: blogs });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error from GetLatestBlogs",
      error: err.message,
    });
  }
};