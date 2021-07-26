import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class BurgersService {
  getAl() {
    return fakeDb.burgers
  }
}

export const burgersService = new BurgersService()
