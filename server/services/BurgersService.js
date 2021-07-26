import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class BurgersService {
  getAll() {
    return fakeDb.burgers
  }

  getById(id) {
    const burgers = fakeDb.burgers.find(k => k.id.toString() === id)
    if (!burgers) {
      throw new BadRequest('Invalid Burger ID')
    }
    return burgers
  }
}

export const burgersService = new BurgersService()
