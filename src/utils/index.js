export const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1)

export const absDiffCheck = (absDiff, attempt) => {

  let numberTextFeedback
  let numberTextFeedbackColour

  const winAlert = () => {
    alert(`Congratulations you won with ${attempt} guesses!`)
    window.location.reload()
  }

  if (absDiff === 0) {
    winAlert()
  } else if (absDiff < 6 && absDiff !== 0) {
    numberTextFeedback = "Very hot!"
    numberTextFeedbackColour = '1'
  } else if (absDiff < 11 && absDiff > 5) {
    numberTextFeedback = "Hot"
    numberTextFeedbackColour = '2'
  } else if (absDiff < 21 && absDiff > 10) {
    numberTextFeedback = "Warm"
    numberTextFeedbackColour = '3'
  } else if (absDiff < 31 && absDiff > 20) {
    numberTextFeedback = "Cold"
    numberTextFeedbackColour = '4'
  } else if (absDiff > 30) {
    numberTextFeedback = "Very cold"
    numberTextFeedbackColour = '5'
  }
  return {
    numberTextFeedback,
    numberTextFeedbackColour,
  }
}