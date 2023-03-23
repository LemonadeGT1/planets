import { coloniesService } from "../services/ColoniesService.js";
import { planetsService } from "../services/PlanetsService.js";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getSpecies)
      .get('/:speciesId/planets', this.getPlanetsForSpecies)
      .post('', this.addSpecies)
  }
  async getPlanetsForSpecies(req, res, next) {
    try {
      const speciesId = req.params.speciesId
      const planets = await coloniesService.getPlanetsForSpecies(speciesId)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async addSpecies(req, res, next) {
    try {
      const speciesData = req.body
      const species = await speciesService.addSpecies(speciesData)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
  async getSpecies(req, res, next) {
    try {
      const speciesData = req.body
      const species = await speciesService.getSpecies(speciesData)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }
}