import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Fotografias from './pages/Fotografias'
import Header from './components/layout/Header'
import Downloads from './pages/Downloads'

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/empresa'element={<Empresa />}></Route>
        <Route path='/contato'element={<Contato />}></Route>
        <Route path='/fotografias'element={<Fotografias />}></Route>
        <Route path='/downloads'element={<Downloads />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
