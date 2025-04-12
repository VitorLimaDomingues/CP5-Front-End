import React from 'react'
import Email from '/src/assets/gmail.png'
import Whatsapp from '/src/assets/whatsapp.png'
import Instagram from '/src/assets/instagram.png'

const Footer = () => {
  return (
    <> 
      <footer className="flex justify-between items-center px-8 h-[15vh] bg-gradient-to-b from-[#1a002b] to-[#0e0015] text-white">
      <section className="flex items-end gap-2 h-full">
        <img src={Email} alt="gmail" className="w-8 h-8 object-contain" />
        <img src={Whatsapp} alt="whatsapp" className="w-8 h-8 object-contain" />
        <img src={Instagram} alt="instagram" className="w-8 h-8 object-contain" />
      </section>

        <p className="text-center text-sm font-jura absolute left-1/2 transform -translate-x-1/2">
          &copy; 2025 - Melodia <br />
          Todos os direitos reservados
        </p>
      </footer>


    </>
  )
}

export default Footer
