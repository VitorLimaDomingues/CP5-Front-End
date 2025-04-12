import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Header from './components/Header'

import './css/index.css'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Routes>

        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
