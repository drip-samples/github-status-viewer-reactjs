import React from "react"
import classNames from "classnames"
import "./GithubUpdateButton.css"
import { connect } from "react-redux"
import { startUpdating, setGithubStatus } from "../../actions/github"

const API_URL = "https://kctbh9vrtdwd.statuspage.io/api/v2/status.json"

class GithubUpdateButton extends React.Component {
  componentDidMount() {
    this.props.update()
  }

  render() {
    const { isUpdating, update, className, style } = this.props
    const submitClassName = classNames("GithubUpdateButton", className, { updating: isUpdating })
    return (
      <button className={submitClassName} style={style} onClick={update} disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Update'}
      </button>
    )
  }
}

const mapStateToProps = state => ({
  isUpdating: state.github.isUpdating,
})

const mapDispatchToProps = dispatch => ({
  update: () => {
    dispatch(startUpdating())
    fetch(API_URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.statusText)
        }
      })
      .then((json) => {
        dispatch(setGithubStatus(json.status.description, json.status.indicator))
      })
      .catch((e) => {
        dispatch(setGithubStatus(e.message, null))
      })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubUpdateButton)
