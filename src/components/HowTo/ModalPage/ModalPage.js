import React from 'react'

import './ModalPage.css'

const ModalPage = ({ showHandler }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <p>Rules</p>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <p>A number is generated from 0-100.
             Enter a guess and look at the colour of your guess to see if you are getting closer or further away from the answer.</p>
          <p>Press the reset button if you want to retry.</p>
        </div>
        <div className="modal-footer">
          <button onClick={showHandler}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ModalPage