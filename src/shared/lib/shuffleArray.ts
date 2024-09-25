import { Tile } from "../models"

export const shuffleArray = (array: Array<any>) => {

    return array.sort(() => 0.5 - Math.random()) 
}