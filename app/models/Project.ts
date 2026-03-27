// models/Project.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  category: string;
  desc: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    tech: { type: [String], required: true },
    liveLink: { type: String, default: "" },
    githubLink: { type: String, default: "" },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// Check if model exists before creating to prevent OverwriteModelError in Next.js
export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
