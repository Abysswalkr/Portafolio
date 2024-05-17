import React from 'react';
import styles from './Animation.module.css'; // Asegúrate de que la ruta es correcta

const Animacion = () => {
    return (
        <div className={styles.cubes}>
            <div className={styles.loop}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
        </div>
    );
}

export default Animacion;
