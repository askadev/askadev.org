import { TOGGLE_AUTH } from '../constants/actionTypes'

export function toggleAuth(user = {}) {
  return {
    type: TOGGLE_AUTH,
    user
  }
}
