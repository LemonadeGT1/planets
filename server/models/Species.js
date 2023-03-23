import { Schema } from "mongoose";


export const SpeciesSchema = new Schema(
  {
    title: { type: String, minLength: 3, maxLength: 50 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)