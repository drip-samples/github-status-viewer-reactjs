import { Record } from "immutable"

import { START_UPDATING, SET_GITHUB_STATUS } from "../actions/github"

const GithubRecord = Record({
  isUpdating: false,
  description: "initialized",
  color: "#545454",
  lastUpdated: null,
})

const getColorByIndicator = (indicator) => {
  switch (indicator) {
    case "none":
      return "#00FF00"
    case "minor":
      return "#FF7F00"
    case "major":
    case "critical":
      return "#FF0000"
    default:
      return "#545454"
  }
}

const github = (state = new GithubRecord(), action) => {
  let record = state
  const payload = action.payload

  switch (action.type) {
  case START_UPDATING:
    record = record
      .set("isUpdating", true)
    break
  case SET_GITHUB_STATUS:
    record = record
      .set("isUpdating", false)
      .set("description", payload.description)
      .set("color", getColorByIndicator(payload.indicator))
      .set("lastUpdated", new Date().toLocaleString())
    break
  default:
    break
  }

  return record
}

export default github
