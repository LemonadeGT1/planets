import { Schema } from "mongoose";


export const ColonySchema = new Schema(
  {
    title: { type: String, minLength: 3, maxLength: 50, required: true },
    population: { type: Number, min: 500, required: true, default: 500 },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
    speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'Species' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ColonySchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})

ColonySchema.virtual('species', {
  localField: 'speciesId',
  foreignField: '_id',
  justOne: true,
  ref: 'Species'
})