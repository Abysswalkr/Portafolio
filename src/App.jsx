import './App.css'
import Animation from './Pages/Animation/Animation.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Proyects from './Pages/Proyects/Proyects.jsx'
import AboutMe from './Pages/AboutMe/AboutMe.jsx'
import Navbar from './Pages/Navbar/Navbar.jsx'
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/Portafolio-Plantilla-React/' element={<Home/>}/>
        <Route path='/Portafolio-Plantilla-React/proyectos' element={<Proyects/>}/>
        <Route path='/Portafolio-Plantilla-React/sobremi' element={<AboutMe/>}/>
      </Routes>
    </div>
  )
}

export default App