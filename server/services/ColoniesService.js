import { dbContext } from "../db/DbContext.js"


class ColoniesService {

  async getPlanetsForSpecies(speciesId) {
    const planets = await dbContext.Colony.find({ speciesId }).populate('planet')
    return planets
  }
  async getSpeciesForPlanets(planetId) {
    const species = await dbContext.Colony.find({ planetId }).populate('species')
    return species
  }
  async getColonies(colonyData) {
    const colonies = await dbContext.Colony.find(colonyData)
    return colonies
  }

  async addColony(colonyData) {
    const newColony = await dbContext.Colony.create(colonyData)
    return newColony
  }

}

export const coloniesService = new ColoniesService()