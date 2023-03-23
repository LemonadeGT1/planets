import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .post('', this.addPlanet)
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