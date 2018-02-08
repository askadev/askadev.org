import { TOGGLE_UI, RESET_MODAL } from '../constants/actionTypes'

export function toggleUI(func) {
  return {
    type: TOGGLE_UI,
    func
  }
}

export function resetModal() {
  return {
    type: RESET_MODAL
  }
}
