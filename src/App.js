import React from 'react';

import { Grid, Typography, Paper, Divider } from '@material-ui/core'

import HowTo from './components/HowTo/HowTo'
import Form from './components/Form/Form'
import Progress from './components/Progress/Progress'
import { generateRandomNumber } from './utils'

class App extends React.Component {
  state = {
    generatedNumber: generateRandomNumber(),
    guess: undefined,
    allGuesses: [],
    attempt: 0,
    show: false,
  }

  updateAppState = (guess) => {
    const { generatedNumber } = this.state
    const absDiff = Math.abs(guess - generatedNumber)
    console.log(generatedNumber, guess)
    this.setState(prevState => ({
      guess,
      allGuesses: [ ...prevState.allGuesses, { guess } ],
      attempt: prevState.attempt + 1
    }))
  }

  render() {
    const { allGuesses, attempt } = this.state
    const guessList = allGuesses.map((item, index) => {
      return (
        <li key={index}>
          <span>{item.guess}</span>
        </li>
      )
    })

    return (
      <Grid container style={{ height: '100vh' }} justify="center" alignItems="center">
        <Grid item xs={3}>
          <Paper style={{ padding: '50px' }} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>HOT or COLD</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Form returnGuessToApp={guess => this.updateAppState(guess)} />
            <HowTo />
            <Progress attempt={attempt} guessList={guessList} />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default App;
