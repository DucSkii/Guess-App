import React, { useRef, useEffect } from 'react'

import { Typography } from '@material-ui/core'

import './Progress.css'

const Progress = ({ attempt, guessList }) => {

  const someRef = useRef()

  const scrollToBottom = () => {
    someRef.current.scrollTop = someRef.current.scrollHeight
  }

  useEffect(() => {
    scrollToBottom()
  }, [ guessList ])

  return (
    <div className="progressBar">
      <Typography className="progressBar__guess" style={{ marginTop: '20px' }} variant="h4">Guess # {attempt}</Typography>
      <ul ref={someRef} className="progressBar__history">
        {guessList}
      </ul>
    </div >
  )
}

export default Progress