import React from 'react'
import './blog.css'


const Blog = () => {
  return (    
  <section id='Kurser'>
    <h1 className='gradient__text'>Kurser :</h1>

    <div className='about__Content'>
      <div className='about__cards'>
        <article className='about__card'>
          
          <h3>React</h3>
          <button>  Læs mere..</button>
        </article>
        <article className='about__card'>
          <h3>Python</h3>
          <button>  Læs mere..</button>
        </article>
        <article className='about__card'>
          <h3>PhP</h3>
          <button>  Læs mere..</button>
        </article>
      </div>
    </div>
  </section>
  )
}

export default Blog