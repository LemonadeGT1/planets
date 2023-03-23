import { coloniesService } from "../services/ColoniesService.js";
import BaseController from "../utils/BaseController.js";


export class ColoniesController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .get('', this.getColonies)
      .post('', this.addColony)
  }
  async getColonies(req, res, next) {
    try {
      const colonyData = req.body
      const colonies = await coloniesService.getColonies(colonyData)
      return res.send(colonies)
    } catch (error) {
      next(error)
    }
  }
  async addColony(req, res, next) {
    try {
      const colonyData = req.body
      const newColony = await coloniesService.addColony(colonyData)
      return res.send(newColony)
    } catch (error) {
      next(error)
    }
  }
}