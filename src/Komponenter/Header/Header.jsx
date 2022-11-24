import React from 'react'
import './header.css' 
import skelet from './../Billeder/skelet.png'

function myFunction() {
  alert('Du er nu tilmeldt')
}

const Header = () => {
  return (
    <div className='h__header section__padding' id='Hjem'>
      <div className='h__header-content'>
        <h1 className='gradient__text'>Kurser for begyndere</h1>
        <p>Web-udviklere skal hele tiden lære og optimere sine kompetencer, hvis man ønsker, at være blandt de bedste i branchen. </p>
        <div className='h__header-content__input'>
          <input type="email" placeholder='Din Email' />
          
          <button onClick={myFunction}>Tilmeld dig</button>

        </div>
      </div>
      <div className='h__header-image'>
        <img src={skelet} alt="skelet" />
      </div>
    </div>
  )
}
export default Header