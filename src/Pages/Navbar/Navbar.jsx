import styles from './Navbar.module.css'; // Ruta ajustada para que sea correcta
import { Link } from 'react-router-dom';
import Redes from './SocialMedia.jsx'; // Ruta ajustada para que sea correcta
import home from '../../assets/Inicio.svg';
import proyec from '../../assets/proyectos.svg';
import sobre from '../../assets/sobremi.svg';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Jose</span>

            <nav className={styles.nav}>
              <Link to="/"><span>I</span>nicio</Link>
              <Link to="/proyects"><span>P</span>royectos</Link>
              <Link to="/aboutme"><span>S</span>obreMi</Link>
            </nav>

            <nav className={styles.navMobile}>
              <Link to="/">
                <img width='40px' src={home} alt="" />
              </Link>
              <Link to="/proyects">
                <img width='40px' src={proyec} alt="" />
              </Link>
              <Link to="/aboutme">
                <img width='40px' src={sobre} alt="" />
              </Link>
            </nav>

            <Redes />
        </header>
    );
}

export default Navbar;
