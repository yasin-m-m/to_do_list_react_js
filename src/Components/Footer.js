import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='Footer'><small>&copy; {currentYear}</small></div>
  )
}

export default Footer