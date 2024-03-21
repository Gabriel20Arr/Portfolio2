import React from 'react'

import styles from "./PrimerPortada.module.css"
// import imgPortada from "/photo-egreso.webp"
import imgPortada from "/12-transformed.png"
// import imgPortada from "/photo-egreso-edit.png"
// import imgPortada from "/photo-egreso-edit-2.png"


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
            <img src={imgPortada} alt='' className={styles.ImgP}/>
        </div>
    </div>
  )
}

{/* <Link to={""}>
    <img src={imgGithub} alt='' className={styles.imgLogos}/>
</Link>
<Link to={""}>
    <img src={imgLinkedin} alt='' className={styles.imgLogos}/>
</Link>
<Link to={""}>
    <img src={imgInstagram} alt='' className={styles.imgLogos}/>
</Link>  */}