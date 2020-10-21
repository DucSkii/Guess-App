import React, { useState } from 'react'

import Modal from './Modal/Modal'
import './HowTo.css'

const HowTo = () => {

  const [ show, setShow ] = useState(false)
  const showHandler = () => setShow(!show)

  return (
    <div className="howTo">
      <button className="howToButton" onClick={showHandler}>How to play</button>
      <Modal show={show} showHandler={showHandler} />
    </div>
  )
}

export default HowTo