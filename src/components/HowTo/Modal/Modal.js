import React from 'react'

import './Modal.css'

const Modal = ({ show, showHandler }) => {
  return (
    <div className="modal-wrapper"
      style={{
        display: show ? 'block' : 'none',
      }}
    >
      <div className="modal-header">
        <p>Rules</p>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <p>asd</p>
        </div>
      </div>
    </div>
  )
}

export default Modal