// models/ClientInquiry.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IClientInquiry extends Document {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const ClientInquirySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }, // Yeh automatically createdAt aur updatedAt add kar dega
);

export default mongoose.models.ClientInquiry ||
  mongoose.model<IClientInquiry>("ClientInquiry", ClientInquirySchema);
