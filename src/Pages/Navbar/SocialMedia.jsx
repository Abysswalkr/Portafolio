import styles from '../Navbar/SocialMedia.module.css'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import Discord from '../../assets/discord.svg'

const Redes = () => {
    return(
        <div className={styles.Redes}>
           <a href="discord.com/users/689842880054821117">
            <img width='25px' src={Discord} alt="" />
           </a>

           <a href="https://github.com/Abysswalkr">
           <img width='25px' src={github} alt="" />
           </a>

           <a href="https://www.instagram.com/picher.jg/">
           <img width='25px' src={instagram} alt="" />
           </a>
        </div>
    )
}

export default Redes;