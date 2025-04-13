import React from 'react'
import Imagem1 from '../assets/imagem1.png'
import Imagem2 from '../assets/imagem2.png'

const Home = () => {
  return (
    <>
    <section className="px-8 py-20 text-white max-w-3xl">
      
      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Melodia: Sua Música, Sua Forma.
      </h2>
    
      <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
        Com o Melodia, sua criatividade sonora ganha forma. Escute e viva suas músicas como nunca antes.
      </p>
      
      <button className='bg-[#ff00b2] hover:bg-[#e60099] text-white text-3xl font-bold py-5 px-16 rounded-[2rem] transition-all duration-300 hover:scale-105 active:scale-95shadow-lg hover:shadow-xl'>
        Experimente agora
      </button>
      
    </section>
    <img src={Imagem1} alt="Ondas" className="w-475"/>

    </>
  )
}

export default Home
