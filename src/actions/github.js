const PREFIX = "@@github-status-viewer/"

export const START_UPDATING = PREFIX + "START_UPDATING"
export const startUpdating = () => ({ type: START_UPDATING })

export const SET_GITHUB_STATUS = PREFIX + "SET_GITHUB_STATUS"
export const setGithubStatus = (description, indicator) => ({ type: SET_GITHUB_STATUS, payload: { description, indicator }})
