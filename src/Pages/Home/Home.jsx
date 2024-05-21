import styles from './Home.module.css'; 
import Animacion from '../Animation/Animation.jsx'; 

const Home = () => {
    // Función para manejar el clic en el botón de Gmail
    const handleGmailClick = () => {
        // Redirige al usuario a Gmail con el correo prellenado
        window.location.href = 'mailto:joseluisgm1403@gmail.com';
    };

    return (
        <section className={styles.Inicio}>
            <article className={styles.full}>
                <h1>Web Developer</h1>
                <p>Soy Jose Luis Gramajo. Estudiante de Ingeniería en Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala, cursando el primer semestre del tercer año. Manejo Kotlin, Java, JavaScript, Python, React+Vite y Supabase. Destaco por mi experiencia en desarrollo Front-End y Back-End, así como en el manejo de bases de datos. He desarrollado un blog sobre el FC Barcelona y actualmente estoy trabajando en un software de inventario. Mi principal enfoque es el desarrollo Front-End.</p>
                <div className={styles.adornos}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> 
            </article>
            <Animacion/>
            <div className={styles.botones}>
                <h2>José Gramajo</h2>
                <div>
                   {/* Botón de Gmail con evento onClick */}
                   <button className={styles.botonLink} onClick={handleGmailClick}>GMAIL</button>
                   <a className={styles.botonLink} href="https://drive.google.com/file/d/1u67QI-b0zCf-KCajzcyW3MeGqmed9p2C/view?usp=sharing" target="_blank">CV</a>   
                </div>
            </div>
        </section>
    );
}

export default Home;
