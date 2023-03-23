import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";
import { coloniesService } from "../services/ColoniesService.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .get('/:planetId/species', this.getSpeciesForPlanets)
      .post('', this.addPlanet)
  }
  async getSpeciesForPlanets(req, res, next) {
    try {
      const planetId = req.params.planetId
      const species = await coloniesService.getSpeciesForPlanets(planetId)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    try {
      const planetData = req.body
      const planets = await planetsService.getPlanets(planetData)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async addPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.addPlanet(planetData)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

}