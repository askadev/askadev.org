import { createSelector } from 'reselect'

const getCurrentRegion = state => state.regions.currentRegion
const getEvents = state => state.events.all
const getUsers = state => state.users.all

const getCurrentUserRegion = state => state.auth.region

function filterByRegion(region, filterables = {}) {
  let values = {}

  Object.keys(filterables).forEach(key => {
    if (filterables[key].region === region) {
      values[key] = filterables[key]
    }
  })

  return values
}

export const eventsForCurrentRegion = createSelector(
  getCurrentRegion,
  getEvents,
  filterByRegion
)

export const usersForCurrentRegion = createSelector(
  getCurrentRegion,
  getUsers,
  filterByRegion
)

export const eventsForCurrentUser = createSelector(
  getCurrentUserRegion,
  getEvents,
  filterByRegion
)
