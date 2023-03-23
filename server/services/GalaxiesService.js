import { dbContext } from "../db/DbContext.js"


class GalaxiesService {

  async getGalaxies(galaxyData) {
    const galaxies = await dbContext.Galaxy.find(galaxyData)
    return galaxies
  }

  async addGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()