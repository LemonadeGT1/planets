import { Schema } from "mongoose";


export const GalaxySchema = new Schema(
  {
    title: { type: String, require: true },
    type: { type: String, enum: ['spiral', 'elliptical', 'irregular', 'ring', 'lenticular', 'interacting'], require: true },
    stars: { type: Number, max: 100000000000000, min: 50000000, default: 100000000 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)