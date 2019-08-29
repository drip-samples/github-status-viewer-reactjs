import React from 'react'
import './App.css'
import GithubStatus from './components/GithubStatus'
import GithubUpdateButton from './components/GithubUpdateButton'

const App = () => (
  <div className="App">
    <h1>
      Github Status Viewer
    </h1>
    <GithubStatus className="github-status" />
    <GithubUpdateButton className="github-update-button" />
  </div>
)

export default App
