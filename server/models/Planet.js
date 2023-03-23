import { Schema } from "mongoose";


export const PlanetSchema = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ['terrestrial', 'gas giant', 'ice giant', 'super earth'] },
    class: { type: String, enum: ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'] },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})