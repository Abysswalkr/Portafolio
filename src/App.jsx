import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Proyects from './Pages/Proyects/Proyects.jsx';
import AboutMe from './Pages/AboutMe/AboutMe.jsx';
import Navbar from './Pages/Navbar/Navbar.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/proyects' element={<Proyects/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}

export default App;
