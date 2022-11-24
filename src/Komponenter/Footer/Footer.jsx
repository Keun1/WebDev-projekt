import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <div className='footer__socials'>
            <a href="https://facebook.com"><AiOutlineFacebook/></a>
            <a href="https://instagram.com"><AiOutlineInstagram/></a>
            <a href="AiOutlineTwitter"><AiOutlineTwitter/></a>
        </div>
    </footer>
  )
}

export default Footer