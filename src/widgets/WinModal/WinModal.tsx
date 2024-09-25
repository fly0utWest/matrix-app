import React from 'react'
import { createPortal } from 'react-dom'

const WinModal = () => {
  return (
    createPortal(<div></div>, document.getElementById('root-modal'))
  )
}
/*  */
export default WinModal