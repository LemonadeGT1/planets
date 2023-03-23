import { dbContext } from "../db/DbContext.js"


class ColoniesService {
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