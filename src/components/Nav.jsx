import React from 'react'
import Image from '../assets/logo_melodia.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <section className="header flex justify-between items-center py-4 px-8">
        
        <div className="flex item-center gap-4">
            <img src={Image} alt="logo" /> 
            <h1 className="text-5xl font-bold tracking-wide text-[#ff00b2] relative top-25">Melodia</h1>
        </div>
        
        <nav className='flex items-center gap-x-8 text-[#ff00b2] text-3xl font-bold tracking-wide'>
          <Link to="/" className="text-[#e60099]">Home</Link>
            <span className="text-[#ff00b2]">|</span>
          <Link to="/Funcionalidades" className="text-[#e60099]">Funcionalidades</Link>
            <span className="text-[#ff00b2]">|</span>
          <Link to="/Contato" className="text-[#e60099]">Contato</Link>
        </nav>

      </section>
    </>
  )
}

export default Nav
