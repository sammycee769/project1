import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
    <Nav/>
    <div className='hi'>
    <div className='contact'>
      <h1>Hi, How Can We Help You?</h1>
      <h2>Contact Us</h2>
      <h3>We're here to help and answer any questions you might have <br/>
           We look forward to hearing from you.</h3>
      <h4>Talk to us </h4>
      <p><FaPhoneAlt />     +234 7014570442</p>
      <p><IoIosMail />      gadgetshub123@gmail.com</p>
      <h5>Our Social Media Handles</h5>
      <div className='ito'>
      <a href="https://www.instagram.com/gadget_shub123?igsh=MTVzYjFjcjN5MW10eg=="target='_blank' ><FaInstagram /></a>
        <a href="https://x.com/Gadget_sHub?t=IoqMxoWPE9ZeD-raEfyGSQ&s=09" target='_blank' ><FaXTwitter /></a>
        <a href="https://wa.me/+2347014570442" target='_blank' ><FaWhatsapp /></a>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
