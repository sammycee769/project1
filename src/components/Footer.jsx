import React from 'react'
import { FaInstagram,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
   <>
    <div className='footer'>
       <a href='/contact'>Contact Us</a>
       <a href='/reportaproblem'>Report a Problem</a>
       <a href='/about'>About Us</a>
    </div>
    <hr/>
    <div className='ar'>
        <p>All Rights Reserved</p>
        <p>&copy;2025</p>
    </div>
    <div className='app'> 
        <a href="https://www.instagram.com/gadget_shub123?igsh=MTVzYjFjcjN5MW10eg=="target='_blank' ><FaInstagram /></a>
        <a href="https://x.com/Gadget_sHub?t=IoqMxoWPE9ZeD-raEfyGSQ&s=09" target='_blank' ><FaXTwitter /></a>
        <a href="https://wa.me/+2347014570442" target='_blank' ><FaWhatsapp /></a>
    </div>
   </>
  )
}
