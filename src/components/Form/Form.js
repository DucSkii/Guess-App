import React from 'react'

import { TextField, Button } from '@material-ui/core'


const Form = ({ returnGuessToApp }) => {

  const error = () => {
    alert('Enter a number from 0-100')
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const guess = event.target.elements.guess.value
    if (guess > 100 || guess < 0) {
      event.target.elements.guess.value = ""
      return error()
    }
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
      <Button fullWidth variant="contained" color="primary" type="submit">Guess</Button>
    </form>
  )
}

export default Form