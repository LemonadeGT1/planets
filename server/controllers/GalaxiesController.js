import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .post('', this.addGalaxy)
  }

  async getGalaxies(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxies = await galaxiesService.getGalaxies(galaxyData)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async addGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const newGalaxy = await galaxiesService.addGalaxy(galaxyData)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }


}