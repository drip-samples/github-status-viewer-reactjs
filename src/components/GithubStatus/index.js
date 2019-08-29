import React from "react"
import classNames from "classnames"
import "./GithubStatus.css"
import { connect } from "react-redux"

const GithubStatus = ({ description, color, lastUpdated, className, style }) => (
  <div className={classNames("GithubStatus", className)} style={style}>
    <p className="status" style={{ backgroundColor: color }}>
      {description}
    </p>
    <p className="last-updated">
      {lastUpdated ? `Last Updated: ${lastUpdated}` : '---'}
    </p>
  </div>
)

const mapStateToProps = state => ({
  description: state.github.description,
  color: state.github.color,
  lastUpdated: state.github.lastUpdated,
})

export default connect(mapStateToProps, null)(GithubStatus)
