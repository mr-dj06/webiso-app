import express from "express";

import { createContacts, deleteContact , ContactCount, getAllContacts,getLatestcontact } from "../controller/contactUsController.js";
 
const router = express.Router();

router.post("/", createContacts);
router.get("/getall",getAllContacts);
router.delete("/delete/:id",deleteContact);

//Total Counts of Contact
router.get("/getcounts",ContactCount);

router.get("/latestcontact",getLatestcontact)


export default router;