import { dbContext } from "../db/DbContext.js"


class PlanetsService {
  async getPlanets(planetData) {
    const planets = await dbContext.Planet.find(planetData)
    return planets
  }

  async addPlanet(planetData) {
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }


}

export const planetsService = new PlanetsService()