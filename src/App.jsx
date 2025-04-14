import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './routes/Home'
import Contato from './routes/Contato'
import Funcionalidades from './routes/Funcionalidades'


import './css/index.css'

function App() {

  return (
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="*" element={<Error/>} />
            <Route path="/" element={<Home />} />
            <Route path="/Funcionalidades" element={<Funcionalidades />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App
