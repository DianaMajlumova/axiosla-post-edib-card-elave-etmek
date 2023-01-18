import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/product"}>Product</NavLink>
      <NavLink to={"/post"}>post</NavLink>
    </div>
  )
}

export default Navbar
