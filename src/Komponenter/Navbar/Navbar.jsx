import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import './navbar.css'
import logo from '../Billeder/React-logo.png'

const Menu = () => (
  <>
  <p><a href="#Hjem">Hjem</a></p>
  <p><a href="#Kurser">Kurser</a></p> 
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <div className='n__navbar'>
     <div className='n__navbar-links'>
        <div className='n__navbar-logo_links'>
          <img src={logo} alt="logo" />
        </div>
        <div className='n__navbar-links_container'>          
          <Menu />
        </div>
      </div>
      <div className='n__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='n__navbar-menu_container scale-up-center'>
              <div className='n__navbar-menu_container-link'>
                <Menu />
              </div>
            </div>
          )}

      </div>
  </div>

  )
}

export default Navbar