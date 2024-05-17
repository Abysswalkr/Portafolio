import styles from './Proyects.module.css';
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import github from '../../assets/github.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'

const Proyects = () => {

    const tarjetas = [
        {
            image: img2,
            name: 'Proyecto BarcaBlog',
            descrip: 'Blog del FC Barcelona: últimas noticias, análisis e historias para aficionados. Página de inicio con publicaciones recientes y área de administración segura.',
            tecno: [html, css, js],
            url: 'https://github.com/Abysswalkr/BarcaBlog',
        },
        {
            image: img3,
            name: 'Proyecto Historia con HTML',
            descrip: 'En este trabajo solo se utilizó HTML para relatar una historia de un guerrero. El objetivo de este proyecto era unicamente usar HTML.',
            tecno: [html, css, js],
            url: 'https://github.com/Abysswalkr/Lab03Web',
        },
        {
            image: img4,
            name: 'Proyecto RecipeApp',
            descrip: 'Una App sobre recetas para poder llevar una vida más saludable. Donde se pueden crear recetas y ver recetas de otras personas que comparten que es lo que comen.',
            tecno: [html, css, js],
            url: 'https://github.com/aherrarte2019037/RecipeApp',
        },
        {
            image: img2,
            name: 'Proyecto Sistema de Recomendaciones',
            descrip: 'Un sistema donde se realizan recomendaciones de que partidos de partidos de futbol deberías de ver dependiendo al equipo al que apoyes.',
            tecno: [html, css, js],
            url: 'https://github.com/Jorge162017/SistemaDeRecomendaciones.com',
        },
        {
            image: img4,
            name: 'Proyecto Interpretador de LISP',
            descrip: 'Un interpretador de LISP donde se ingresaba la la información y este lo traduce.',
            tecno: [html, css, js],
            url: 'https://github.com/chuy-zip/PROYECTO1_Estructuras',
        },
        {
            image: img3,
            name: 'Proyecto Sistema de Inventario',
            descrip: 'Sistema donde se pueden ingresar libros y este los almacena, también se pueden crear solicitudes para poder comprar más libros.',
            tecno: [html, css, js],
            url: 'https://github.com/aherrarte2019037/BookManagment',
        },
    ];

    return (
        <section className={styles.Proyects}>
            <h2>Proyectos</h2>
            <div className={styles.cards}>
                {tarjetas.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.package}>
                            <div className={styles.package2}>
                                <div className={styles.img}>
                                    <img width='100%' height='150px' src={card.image} alt="" />
                                </div>
                                <h3 className={styles.text}>{card.name}</h3>
                                <p className={styles.text}>{card.descrip}</p>
                                <div className={styles.tecno}>
                                    <img width='30px' src={card.tecno[0]} alt="" />
                                    <img width='30px' src={card.tecno[1]} alt="" />
                                    <img width='30px' src={card.tecno[2]} alt="" />
                                </div>
                                <div className={styles.github}>
                                    <a href={card.url}>
                                        <img width='30px' src={github} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Proyects;
