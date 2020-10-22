import React, { useState } from 'react'

import MyModal from '../../utils/Modal/Modal'
import ModalPage from './ModalPage/ModalPage'
import './HowTo.css'

const HowTo = () => {

  const [ show, setShow ] = useState(false)
  const showHandler = () => setShow(!show)

  return (
    <div className="howTo">
      <button type="button" className="howToButton" onClick={showHandler}>How to play</button>
      <MyModal open={show} onClose={showHandler}>
        <ModalPage showHandler={showHandler} />
      </MyModal>
    </div>
  )
}

export default HowTo