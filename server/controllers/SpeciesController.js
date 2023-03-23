import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class SpeciesController extends BaseController {
  constructor() {
    super('api/Species')
    this.router
      .get('', this.getSpecies)
      .post('', this.addSpecies)
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