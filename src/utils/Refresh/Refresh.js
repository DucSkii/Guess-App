import React from 'react'
import './Refresh.css'

const Refresh = ({ buttonName }) => {
  const reloadPage = () => {
    window.location.reload()
  }
  return (
    <div className="reset">
      <button className="resetButton" type="button" onClick={reloadPage}>{buttonName}</button>
    </div>
  )
}

export default Refresh

