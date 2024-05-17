import styles from './Home.module.css'; 
import Animacion from '../Animation/Animation.jsx'; 

const Home = () => {
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

            <div className={styles.botones}>
                <h2>José Gramajo</h2>
                <div>
                   <a href="mailto:joseluisgm1403@gmail.com">GMAIL</a> 
                   <a href="#">CV</a>   
                </div>
            </div>

            <Animacion/>
        </section>
    );
}

export default Home;

