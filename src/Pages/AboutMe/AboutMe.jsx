import styles from './AboutMe.module.css'
import Animacion from '../Animation/Animation.jsx' 
import perfil from '../../assets/perfil1.jpg'

const AboutMe = () => {
    return (
        <section className={styles.AboutMe}>
            <Animacion/>
           <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="" />
                </div>
                <p>Hola, mi nombre es José Luis Jr. Gramajo Moraga. Soy apasionado por la tecnología y el aprendizaje continuo. Desde joven, la tecnología ha sido mi herramienta para mejorar el mundo. Me considero curioso y siempre busco nuevos conocimientos. Además, valoro la disciplina y la perseverancia, cualidades que he cultivado en mi vida profesional y personal. Creo en la importancia de adaptarse a los cambios y enfrentar desafíos con una actitud positiva y proactiva.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>

                <h2>Educación</h2>

                <div>
                    <h3>Bacchillerato en Ciencias y Letras</h3>
                    <h4>Liceo Guatemala</h4>
                </div>

                <div>
                <h3>Ingles Avanzado C1</h3>
                    <h4>Academia Europea</h4>
                </div>

                <div>
                <h3>Ingeniería en CC y TI</h3>
                    <h4>Universidad del Valle de Guatemala</h4>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;