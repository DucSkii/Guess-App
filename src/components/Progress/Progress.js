import React from 'react'

import { Typography } from '@material-ui/core'

import './Progress.css'
// comment
const Progress = ({ attempt, guessList }) => {
  return (
    <div>
      <Typography style={{ marginTop: '50px' }} variant="h3">Guess # {attempt}</Typography>
      <ul className="progressBar__history">
        {guessList}
      </ul>
    </div>
  )
}

export default Progress