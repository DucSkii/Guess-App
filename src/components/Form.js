import React from 'react'

import { TextField, Button } from '@material-ui/core'


const Form = ({ returnGuessToApp }) => {

  const onSubmit = (event) => {
    event.preventDefault()

    const guess = event.target.elements.guess.value
    event.target.elements.guess.value = ""
    returnGuessToApp(guess)
  }

  return (
    <form style={{ marginTop: '20px' }} onSubmit={onSubmit}>
      <TextField style={{ paddingBottom: '20px' }}
        fullWidth
        type="number"
        name="guess"
        placeholder="Enter your guess..."
        required
      />
      <Button fullWidth varuant="contained" color="primary" type="submit">Guess</Button>
    </form>
  )
}

export default Form