function RecursoCard({ titulo, descricao, iconeIndex }) {
  const coresIcones = [
    "bg-[#9333ea]",
    "bg-[#8b5cf6]",
    "bg-[#7e22ce]",
    "bg-[#a855f7]",
  ]

  return (
    <div className="bg-[#2a0045]/60 rounded-lg p-6 transition-all duration-300 hover:bg-[#2a0045]/80">
      <div className="flex items-start">
        <div
          className={`${coresIcones[iconeIndex % 4]} w-10 h-10 rounded-md flex items-center justify-center mr-4 flex-shrink-0`}
        >
          <div className="w-5 h-5 border-2 border-white rounded"></div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{titulo}</h3>
          <p className="text-gray-300 leading-relaxed">{descricao}</p>
        </div>
      </div>
    </div>
  )
}

// Novo componente para os depoimentos
function DepoimentoCard({ nome, perfil, texto, foto, avaliacao }) {
  return (
    <div className="bg-[#1f0033] rounded-lg p-6 shadow-md text-white flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        <img src={foto} alt={`Foto de ${nome}`} className="w-14 h-14 rounded-full" />
        <div>
          <h3 className="font-semibold">{nome}</h3>
          <p className="text-sm text-gray-400">{perfil}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{texto}"</p>
      <div className="text-yellow-400 text-sm">
        {"★".repeat(avaliacao)}{"☆".repeat(5 - avaliacao)}
      </div>
    </div>
  )
}

export default function Funcionalidades() {
  const recursos = [
    {
      titulo: "Qualidade de som superior",
      descricao:
        "Desfrute de uma experiência auditiva excepcional com nossa tecnologia avançada de processamento de áudio que oferece som cristalino em qualquer dispositivo.",
    },
    {
      titulo: "Criação de playlists personalizadas",
      descricao:
        "Monte coleções musicais exclusivas baseadas nos seus gostos, humor ou ocasião. Compartilhe facilmente com amigos ou mantenha suas playlists privadas.",
    },
    {
      titulo: "Descoberta de novos artistas",
      descricao:
        "Amplie seus horizontes musicais com recomendações personalizadas baseadas em seu histórico de audição e preferências. Encontre novos artistas e gêneros que combinam com seu estilo.",
    },
    {
      titulo: "Interface intuitiva",
      descricao:
        "Navegue com facilidade pelo aplicativo graças ao nosso design limpo e intuitivo. Encontre o que procura rapidamente e sem complicações.",
    },
  ]

  const depoimentos = [
    {
      nome: "Mariana Silva",
      perfil: "Produtora Musical",
      texto:
        "O Melodia revolucionou minha forma de descobrir novos artistas. A qualidade do áudio é impressionante, mesmo em fones de ouvido comuns.",
      avaliacao: 5,
      foto: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg-8Inm4IK0BrEWujf8zeo5cKXiOmiUpZ.jpeg",
    },
    {
      nome: "Carlos Mendes",
      perfil: "DJ & Compositor",
      texto:
        "Uso o Melodia diariamente para criar playlists para meus sets. A interface é super intuitiva e as recomendações são sempre certeiras.",
      avaliacao: 5,
      foto: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rayul-_M6gy9oHgII-unsplash.jpg-qyYlOR9EIsEJWuxDxUXbQbV85mxIs6.jpeg",
    },
    {
      nome: "Rafael Oliveira",
      perfil: "Entusiasta de Áudio",
      texto:
        "Testei vários serviços de streaming, mas nenhum se compara à qualidade de som do Melodia. É como estar em um estúdio profissional.",
      avaliacao: 5,
      foto: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vince-fleming-j3lf-Jn6deo-unsplash.jpg-WA3aOuLzg0McUuaeRzwEhNv10VAEGt.jpeg",
    },
    {
      nome: "Juliana Costa",
      perfil: "Estudante de Música",
      texto:
        "Como estudante de música, preciso de um app que me permita explorar diferentes gêneros com qualidade. O Melodia é perfeito para isso!",
      avaliacao: 4,
      foto: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg-Csw7TK7ovNAI2R57rFqtWzenG34HF8.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-[#120024] text-white">
      <header className="pt-8">
        <h1 className="sr-only">Melodia - Seu aplicativo de música</h1>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24" aria-labelledby="funcionalidades-titulo">
          <h2 id="funcionalidades-titulo" className="text-4xl font-bold text-center mb-4">
            Funcionalidades
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Conheça os principais recursos que fazem do Melodia a sua melhor escolha para ouvir música
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {recursos.map((recurso, index) => (
              <RecursoCard
                key={index}
                titulo={recurso.titulo}
                descricao={recurso.descricao}
                iconeIndex={index}
              />
            ))}
          </div>
        </section>

        <div
          className="w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 my-12"
          aria-hidden="true"
        ></div>

        {/* Seção de Depoimentos */}
        <section aria-labelledby="depoimentos-titulo" className="mb-24">
          <h2 id="depoimentos-titulo" className="text-4xl font-bold text-center mb-8">
            Depoimentos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {depoimentos.map((item, index) => (
              <DepoimentoCard key={index} {...item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 py-8" aria-label="Rodapé">
        <p>Feito com ♪ para os amantes da música</p>
      </footer>
    </div>
  )
}
