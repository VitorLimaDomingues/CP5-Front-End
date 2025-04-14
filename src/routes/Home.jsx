import React from 'react'
import Imagem1 from '../assets/imagem1.png' // onda no fundo
import Imagem2 from '../assets/imagem2.png' // fone neon

const Home = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#1b0033] to-[#35014a] text-white overflow-hidden px-6 md:px-16">
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10">
        
        <div className="md:w-1/2 text-left space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Melodia: Sua Música,<br className="hidden md:block" /> Sua Forma.
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Com o Melodia, sua criatividade sonora ganha forma. Escute e viva suas músicas como nunca antes.
          </p>
          <button className='bg-[#ff00b2] hover:bg-[#e60099] text-white text-xl font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg'>
            Experimente agora
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src={Imagem2} alt="Fone Neon" className="w-[250px] md:w-[320px] lg:w-[360px] object-contain" />
        </div>
      </div>

      <img src={Imagem1} alt="Onda de fundo" className="absolute bottom-0 left-0 w-full z-0 pointer-events-none" />
    </section>
  )
}

export default Home
