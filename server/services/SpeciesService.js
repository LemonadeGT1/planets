import { dbContext } from "../db/DbContext.js"


class SpeciesService {
  async addSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    return species
  }
  async getSpecies(speciesData) {
    const species = await dbContext.Species.find(speciesData)
    return species
  }

}

export const speciesService = new SpeciesService()