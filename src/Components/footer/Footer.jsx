import React from 'react'
import { Link } from 'react-router-dom'
import { RiMessage3Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";





function Footer() {
  return (
    <div className='footer-container'>
        <div className='f-wrapper'>
            <div className='discrptions'>
                <h2 className='f-logo'>a<span>l</span>aa</h2>
                <p>lorm  tsqdeazv ygyqsdrtrazed sqydrqsd ytdsqrazd qsdrtqsda ystqdqdgaz ytqsydz ysqdrqsdfaz ffqsdtrraz</p>
            </div>
            <div className='addres'>
                <h3>office</h3>
                <p>alger</p>
                <p>afian</p>
                <p>15/574781</p>
                <p>017 174 4778</p>
            </div>
            <div className='links'>
                <h3>links</h3>
                <Link to="/" className='f-link_item'>Home</Link>
                <Link to="/Services" className='f-link_item'>Services</Link>
                <Link to="/about" className='f-link_item'>about</Link>
                <Link to="/contact" className='f-link_item'>contact</Link>
            </div>
            <div className='f-contactUs'>
                <h3>contactUs</h3>
                <div className='form-inp' >
                    <RiMessage3Line />
                    <input type="text" />
                    <FaArrowRight />
                </div>
                <div className='social'>        
                    <Link to="/contact" className='f-sociallink'><FaFacebook /></Link>
                    <Link to="/contact" className='f-sociallink'><FaInstagramSquare /></Link>
                    <Link to="/contact" className='f-sociallink'><FaTelegram /></Link>
                    <Link to="/contact" className='f-sociallink'><FaPinterestSquare /></Link>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer