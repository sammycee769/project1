import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './AboutUs.css';
import { FaArrowUp } from "react-icons/fa6";
export default function About() {
  return (
  <>
  <div  id='blit'>
  <Nav/>
  
  <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p>
                Welcome to <strong>Gadgets Hub</strong> – Your Ultimate Destination for the Latest Gadgets!<br /><br />
                At <strong>Gadgets Hub</strong>, we are passionate about innovation and technology. Our mission is to bring you 
                cutting-edge gadgets that simplify life, enhance productivity, and inspire creativity. Whether you're a tech 
                enthusiast, a professional, or someone exploring the digital world, we have something for everyone.<br /><br />
            </p>
            <h2 className="about-subtitle">Why Choose Us?</h2>
            <p>
                <strong>Quality Products:</strong> We partner with trusted brands and manufacturers to ensure you get only the best.<br />
                <strong>Expert Recommendations:</strong> Our team of tech experts reviews and tests gadgets to help you make informed decisions.<br />
                <strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We offer exceptional customer service 
                and a seamless shopping experience.<br />
                <strong>Latest Trends:</strong> Stay ahead with our curated collection of trending gadgets that suit your lifestyle.<br /><br />
            </p>
            <h2 className="about-subtitle">Our Vision</h2>
            <p>
                We aim to be your go-to source for everything tech by providing a wide range of gadgets that empower and delight.<br /><br />
            </p>
            <h2 className="about-subtitle">Our Promise</h2>
            <p>
                We are committed to offering:<br />
                - Genuine products.<br />
                - Competitive pricing.<br />
                - Secure and fast delivery.<br /><br />
            </p>
            <p>
                Join thousands of satisfied customers who trust <strong>Gadgets Hub</strong> to keep them connected to the future of technology.<br /><br />
                Have questions or need assistance? Our friendly support team is here to help.<br /><br />
            </p>
            <h2 className="about-subtitle">Explore, Discover, and Transform Your World with Gadgets Hub.</h2>
        </div>
        <div className='cont'>
               <a id='bot' href="#blit"><FaArrowUp /> Back to Top</a>
               </div>
  </div>
  
  <Footer/>
  </>
  )
}
