import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header-main'>
<Link to='/' style={{textDecoration:"none",color:'white'}}><h2>Home</h2></Link >
    </div>
  )
}

export default Header