export const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1)

export const absDiffCheck = (absDiff, attempt) => {

  let numberColour
  let numberFeedback

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
  } else if (absDiff < 11 && absDiff > 5) {
    numberColour = "#f55d5d"
    numberFeedback = "Hot"
  } else if (absDiff < 16 && absDiff > 10) {
    numberColour = "#ed7445"
    numberFeedback = "Warm"
  } else if (absDiff < 26 && absDiff > 15) {
    numberColour = "#eb4ed6"
    numberFeedback = "Cold"
  } else if (absDiff > 25) {
    numberColour = "#81d8f7"
    numberFeedback = "Very cold"
  }
  return {
    numberColour,
    numberFeedback,
  }
}