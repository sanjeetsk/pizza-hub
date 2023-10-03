import './style.css';
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='contact'>
            <span>Contact Us</span>
            <span>90099000990</span>
            <span>90099009990</span>
        </div>
        <div className='follow'>
            <span>Follow Us</span>
            <span>Facebook</span>
            <span>Instagram</span>
        </div>
        <div className='author'>
            <p>Copyright © 2023 THE PIZZA HUB</p>
            <p>Designed and Developed by @Sanjeet</p>
        </div>
    </div>
  )
}

export default Footer
