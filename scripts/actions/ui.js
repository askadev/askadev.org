import { TOGGLE_UI } from '../constants/actionTypes'

export function toggleUI(func) {
  return {
    type: TOGGLE_UI,
    func
  }
}
