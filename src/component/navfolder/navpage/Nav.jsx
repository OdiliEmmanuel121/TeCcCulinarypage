import logoImage from '../../../assets/logo-image.png'
import { Link } from "react-router-dom"
import './Nav.css'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const Nav = () => {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        
        setShow(!show)
    }
    const closeMenu = () => {
       
        setShow(false)
    }

   return (
        <header className='NavContainer'> 
            <img src={logoImage} alt="logo" className="logo" />
            <nav className='Nav-Links-And-Toggle'>
               
                <FaBars className='bar' onClick={toggleMenu} aria-label="Toggle navigation menu" />
            
                <div className={`links ${show ? 'show' : ''}`}>
                    <Link to='/' onClick={closeMenu}>Home</Link>
                    <Link to='/services' onClick={closeMenu}>Services</Link>
                    <Link to='/faqs' onClick={closeMenu}>FAQs</Link>
                    <Link to='/contactUs' onClick={closeMenu}>Contact Us</Link>
                </div>
            </nav>
        </header>
    )
}
export default Nav;