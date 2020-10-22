export const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1)

export const absDiffCheck = (absDiff, attempt) => {

  let numberColour
  let numberFeedback
  let numberFeedbackColour

  const winAlert = () => {
    alert(`Congratulations you won with ${attempt} guesses!`)
    window.location.reload()
  }

  if (absDiff === 0) {
    numberColour = "#000000"
    winAlert()
  } else if (absDiff < 6 && absDiff !== 0) {
    numberColour = "#ff0000"
    numberFeedback = "Very hot!"
    numberFeedbackColour = '1'
  } else if (absDiff < 11 && absDiff > 5) {
    numberColour = "#f55d5d"
    numberFeedback = "Hot"
    numberFeedbackColour = '2'
  } else if (absDiff < 16 && absDiff > 10) {
    numberColour = "#ed7445"
    numberFeedback = "Warm"
    numberFeedbackColour = '3'
  } else if (absDiff < 26 && absDiff > 15) {
    numberColour = "#87a3df"
    numberFeedback = "Cold"
    numberFeedbackColour = '4'
  } else if (absDiff > 25) {
    numberColour = "#48afd4"
    numberFeedback = "Very cold"
    numberFeedbackColour = '5'
  }
  return {
    numberColour,
    numberFeedback,
    numberFeedbackColour,
  }
}