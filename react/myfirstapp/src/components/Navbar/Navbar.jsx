import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <ol style={{ textAlign: "left" }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </nav>
    </>
  )
}

export default Navbar;