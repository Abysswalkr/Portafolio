import styles from '../Navbar/Navbar.module.css';
import { Link } from 'react-router-dom';
import Redes from '../Navbar/SocialMedia.jsx';
import home from '../../assets/Inicio.svg';
import proyec from '../../assets/proyectos.svg';
import sobre from '../../assets/sobremi.svg';


const Menu = () => {
    return(
        <header className={styles.header}>
            <span className={styles.logo}>Jose</span>

            <nav className={styles.nav}>

              <Link to='/Portafolio/'><span>I</span>nicio</Link>

              <Link to='/Portafolio/proyects'><span>P</span>royectos</Link>

              <Link to='/Portafolio/aboutme'><span>S</span>obreMi</Link>

            </nav>

            <nav className={styles.navMobile}>
                 
              <Link to='/Portafolio/'>
                <img width='40px' src={home} alt="" />
              </Link>


              <Link to='/Portafolio/proyects'>
              <img width='40px' src={proyec} alt="" />
              </Link>


              <Link to='/Portafolio/aboutme'>
               <img width='40px' src={sobre} alt="" />
              </Link>

            </nav>


            <Redes/>
        </header>
    )
}

export default Menu;