import React from 'react'

const Contato = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="bg-[#220034] rounded-3xl p-12 shadow-2xl w-full max-w-xl text-center text-white">
        <h2 className="text-4xl font-bold mb-10" style={{ color: '#F24CD4' }}>
          Fique por dentro<br />das novidades!
        </h2>

        <form action="#" method="POST" className="space-y-6">
          <div className="text-left">
            <label className="block text-pink-400 text-lg mb-2" htmlFor="nome">Escreva seu nome:</label>
            <input type="text" id="nome" name="nome" className="w-full p-4 rounded-xl bg-white text-black outline-none text-lg" required />
          </div>

          <div className="text-left">
            <label className="block text-pink-400 text-lg mb-2" htmlFor="email">Escreva seu email:</label>
            <input type="email" id="email" name="email" className="w-full p-4 rounded-xl bg-white text-black outline-none text-lg" required />
          </div>

          <div className="text-left">
            <label className="block text-pink-400 text-lg mb-2" htmlFor="celular">Escreva seu celular:</label>
            <input type="tel" id="celular" name="celular" className="w-full p-4 rounded-xl bg-white text-black outline-none text-lg" required />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white py-4 text-lg rounded-2xl mt-6 hover:opacity-90 transition">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contato