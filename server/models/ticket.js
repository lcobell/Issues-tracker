import mongoose from "mongoose";
import { Schema } from "mongoose";

const ticketSchema = new Schema({
  title: String, // Title should be the name of issue
  description: String, // Description should be the description of  issue
  status: String, // Status should be received, in progress, or completed
  date: Date, // Date should be the date the issue was created
  comments: String,
  open: Boolean, // Open should be true if the issue is open, false if it is closed
});

export default mongoose.model("Ticket", ticketSchema); // Export the Ticket model so it can be used in other files
