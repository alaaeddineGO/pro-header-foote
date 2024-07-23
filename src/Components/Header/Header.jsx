import '../../index.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GoArrowDownRight } from "react-icons/go";


function Header() {
  const links = document.querySelectorAll('.link_item')
  links.forEach((link)=>{
    link.addEventListener('click', ()=>{
      document.querySelector('.active')?.classList.remove('active');
      link.classList.add('active');
    })
  })
  const [opennav,setOpennav] = useState(false);
  const togllenav = ()=>{
    setOpennav(!opennav)
  }
  
  return (
    <div className='header-container'>
      <div className='wrapper'>
          <h2><Link to="/">a<span>l</span>aa</Link></h2>
          <ul className={`list ${opennav?"shownav":""}`} onClick={togllenav}>
            <li>
              <span><GoArrowDownRight /></span>
              <Link to="/" className='link_item active'>Home</Link>
            </li>
            <li>
              <span><GoArrowDownRight /></span>
              <Link to="/Services" className='link_item'>Services</Link>
            </li>
            <li>
              <span><GoArrowDownRight /></span>
              <Link to="/about" className='link_item'>about</Link>
            </li>
            <li>
              <span><GoArrowDownRight /></span>
              <Link to="/contact" className='link_item'>contact</Link>
            </li>
          </ul>
          <div className='icon' onClick={togllenav}>
            {opennav?<IoMdClose />:<FiAlignJustify />}
          </div>
      </div>
    </div>
  )
}

export default Header