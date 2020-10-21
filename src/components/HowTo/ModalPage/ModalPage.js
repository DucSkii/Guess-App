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
          <p>Easd</p>
        </div>
        <div className="modal-footer">
          <button onClick={showHandler}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ModalPage