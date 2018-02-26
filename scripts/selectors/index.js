import { createSelector } from 'reselect'

const getCurrentRegion = state => state.regions.currentRegion
const getEvents = state => state.events.all
const getMentors = state => state.users.all

const getRegionIdByDisplayName = (state, props) => Object.keys(state.regions.all || {}).find(regionUid => state.regions.all[regionUid].displayName === props.regionName )

const getCurrentUserRegion = state => state.users.currentUser.region

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
  getMentors,
  filterByRegion
)

export const eventsForCurrentUser = createSelector(
  getCurrentUserRegion,
  getEvents,
  filterByRegion
)

export const makeEventsForOptionalRegion = () => createSelector(
  getCurrentRegion,
  getRegionIdByDisplayName,
  getEvents,
  (currentRegion, regionByProps, events) => {
    if (regionByProps) {
      return filterByRegion(regionByProps, events)
    }

    if (currentRegion) {
      return filterByRegion(currentRegion, events)
    }

    return events
  }
)

export const makeMentorsForOptionalRegion = () => createSelector(
  getCurrentRegion,
  getRegionIdByDisplayName,
  getMentors,
  (currentRegion, regionByProps, mentors) => {
    if (regionByProps) {
      return filterByRegion(regionByProps, mentors)
    }

    if (currentRegion) {
      return filterByRegion(currentRegion, mentors)
    }

    return mentors
  }
)
