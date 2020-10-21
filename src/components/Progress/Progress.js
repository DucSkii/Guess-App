import React from 'react'

import { Typography } from '@material-ui/core'

import './Progress.css'

const Progress = ({ attempt, guessList }) => {
  return (
    <div>
      <Typography style={{ marginTop: '20px' }} variant="h3">Guess # {attempt}</Typography>
      <ul className="progressBar__history">
        {guessList}
      </ul>
    </div>
  )
}

export default Progress