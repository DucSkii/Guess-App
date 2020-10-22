import React from 'react';

import { Grid, Typography, Paper, Divider } from '@material-ui/core'

import Refresh from './utils/Refresh/Refresh'
import HowTo from './components/HowTo/HowTo'
import Form from './components/Form/Form'
import Progress from './components/Progress/Progress'
import { generateRandomNumber, absDiffCheck } from './utils'

import './App.css'

class App extends React.Component {
  state = {
    generatedNumber: generateRandomNumber(),
    guess: undefined,
    allGuesses: [],
    attempt: 0,
    show: false,
    numberFeedback: '',
    numberFeedbackColour: '',
  }

  updateAppState = (guess) => {
    const { generatedNumber, attempt } = this.state
    const absDiff = Math.abs(guess - generatedNumber)
    console.log(generatedNumber, guess, absDiff)
    const { numberTextFeedback, numberTextFeedbackColour } = absDiffCheck(absDiff, attempt)
    this.setState(prevState => ({
      guess,
      allGuesses: [ ...prevState.allGuesses, { guess, guessNumberFeedbackColour: numberTextFeedbackColour } ],
      attempt: prevState.attempt + 1,
      numberTextFeedback,
      numberTextFeedbackColour,
    }))
    console.log(this.state)
  }

  render() {
    const { allGuesses, attempt, numberTextFeedback, numberTextFeedbackColour } = this.state

    const guessList = allGuesses.map((item, index) => {
      return (
        <li key={index} className={`numberColour${item.guessNumberFeedbackColour}`}>
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
            <div className="numberFeedback-wrapper">
              <div className={`numberFeedback-${numberTextFeedbackColour}`}>{numberTextFeedback}</div>
            </div>
            <Refresh buttonName="Reset" />
            <HowTo />
            <Progress attempt={attempt} guessList={guessList} />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default App;
