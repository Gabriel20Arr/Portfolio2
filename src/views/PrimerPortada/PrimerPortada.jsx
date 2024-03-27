import React from 'react'

import styles from "./PrimerPortada.module.css"
import imgPortada2 from "/img-portadas/img-programer-7.jpg"


export const PrimerPortada = () => {
  return (
    <div id='home' className={styles.ContenedorHome}>
        <div className={styles.CText}>
            <div className={styles.CText2}>
                <p className={styles.first}>
                    <span className={styles.first0}>Hola, bienvenido!!</span>
                    <br />
                    Soy Gabriel Arroyo
                    <br/>
                <span className={styles.second}>Full Stack Developer</span>
                </p>
            </div>
            <div className={styles.CLogo}>
                <a href="/CV-Gabriel-FullStack.pdf" download="CV-Gabriel-FullStack" className={styles.miCv}>Mi CV</a>
            </div>
        </div>
    
        <div className={styles.CImg}>
            <img src={imgPortada2} alt='' className={styles.ImgP}/>
        </div>
    </div>
  )
}