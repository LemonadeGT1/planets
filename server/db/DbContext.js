import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ColonySchema } from "../models/Colony.js";
import { GalaxySchema } from "../models/Galaxy.js";
import { PlanetSchema } from "../models/Planet.js";
import { SpeciesSchema } from "../models/Species.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxy = mongoose.model('Galaxy', GalaxySchema);
  Planet = mongoose.model('Planet', PlanetSchema);
  Colony = mongoose.model('Colony', ColonySchema);
  Species = mongoose.model('Species', SpeciesSchema);
}

export const dbContext = new DbContext()
