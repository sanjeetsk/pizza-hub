import React from 'react'
import './style.css';

function Header() {
  function handleLogout(){
    console.log("logout");
  }
  return (
    <div className='navbar'>
        <p className='logo'>
            The Pizza Hub
        </p>
        <div style={{display:"flex", alignItems:"center", gap:"0.75rem"}}>
            <p>Cart</p>
            <p>Profile</p>
            <p className='link' onClick={handleLogout}>Logout</p>
        </div>
    </div>
  )
}

export default Header