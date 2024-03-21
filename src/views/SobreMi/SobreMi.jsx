import React, { useState } from 'react'

import styles from "./SobreMi.module.css"


export const SobreMi = () => {

    const imagenes = [
        "/logos-tech-webp/html.webp",
        "/logos-tech-webp/css.webp",
        "/logos-tech-webp/javascript_icon_130900.webp",
        "/logos-tech-webp/react_original_logo_icon_146374.webp",
        "/logos-tech-webp/next-js.webp",
        "/logos-tech-webp/redux_original_logo_icon_146365.webp",
        "/logos-tech-webp/express_original_wordmark_logo_icon_146528.webp",
        "/logos-tech-webp/bootstrap_plain_logo_icon_146619.webp",
        "/logos-tech-webp/mongodb_original_logo_icon_146424.webp",
        "/logos-tech-webp/postgresql_original_logo_icon_146391.webp",
        "/logos-tech-webp/logo-github.webp",
        "/logos-tech-webp/trello_logo_icon_189227.webp",
        "/logos-tech-webp/npm_original_wordmark_logo_icon_146402.webp",
    ]
    const imagenes2 = [
        "/logos-tech-webp/html.webp",
        "/logos-tech-webp/css.webp",
        "/logos-tech-webp/javascript_icon_130900.webp",
        "/logos-tech-webp/react_original_logo_icon_146374.webp",
        "/logos-tech-webp/next-js.webp",
        "/logos-tech-webp/redux_original_logo_icon_146365.webp",
        "/logos-tech-webp/express_original_wordmark_logo_icon_146528.webp",
        "/logos-tech-webp/bootstrap_plain_logo_icon_146619.webp",
        "/logos-tech-webp/mongodb_original_logo_icon_146424.webp",
        "/logos-tech-webp/postgresql_original_logo_icon_146391.webp",
        "/logos-tech-webp/logo-github.webp",
        "/logos-tech-webp/trello_logo_icon_189227.webp",
        "/logos-tech-webp/npm_original_wordmark_logo_icon_146402.webp",
    ]
    const imagenes3 = [
        "/logos-tech-webp/html.webp",
        "/logos-tech-webp/css.webp",
        "/logos-tech-webp/javascript_icon_130900.webp",
        "/logos-tech-webp/react_original_logo_icon_146374.webp",
        "/logos-tech-webp/next-js.webp",
        "/logos-tech-webp/redux_original_logo_icon_146365.webp",
        "/logos-tech-webp/express_original_wordmark_logo_icon_146528.webp",
        "/logos-tech-webp/bootstrap_plain_logo_icon_146619.webp",
        "/logos-tech-webp/mongodb_original_logo_icon_146424.webp",
        "/logos-tech-webp/postgresql_original_logo_icon_146391.webp",
        "/logos-tech-webp/logo-github.webp",
        "/logos-tech-webp/trello_logo_icon_189227.webp",
        "/logos-tech-webp/npm_original_wordmark_logo_icon_146402.webp",
    ]

    
  return (
    <div id="sobre-mi" className={styles.containerS}>
        <h1 className="text-3xl font-bold underline">Sobre Mi</h1>
        <p className="text-3xl font-bold underline bg-red-400">
            Soy un desarrollador <b> Full Stack </b> argentino con amplia experiencia en todas las áreas del desarrollo web. 
            <br />
            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles. 
            <br/>
            Soy una persona empática, responsable y disciplinada, y disfruto trabajando en equipo. He demostrado habilidades de comunicación y liderazgo al colaborar efectivamente en entornos grupales. Además, siempre estoy en busca de oportunidades para ampliar mis conocimientos a través de certificaciones y cursos relevantes en desarrollo web.
        </p>

        <p className={styles.c2P}>
            Soy un desarrollador <b> Full Stack </b> argentino con amplia experiencia en todas las áreas del desarrollo web. 
            <br />
            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles. 
            <br/>
            Soy una persona empática, responsable y disciplinada, y disfruto trabajando en equipo. He demostrado habilidades de comunicación y liderazgo al colaborar efectivamente en entornos grupales. Además, siempre estoy en busca de oportunidades para ampliar mis conocimientos a través de certificaciones y cursos relevantes en desarrollo web.
        </p> 

        <div className={styles.carouselSlide1}>
            <div className={styles.carouselSlide2}>
                {imagenes?.map((image, index) => (
                <div key={index} className={styles.slide2}>
                    <img src={image} alt={`Slide ${index}`} className={styles.imgCarrusel}/>
                </div>
                ))}
                {imagenes2?.map((image, index) => (
                <div key={index} className={styles.slide2}>
                    <img src={image} alt={`Slide ${index}`} className={styles.imgCarrusel}/>
                </div>
                ))}
                {imagenes3?.map((image, index) => (
                <div key={index} className={styles.slide2}>
                    <img src={image} alt={`Slide ${index}`} className={styles.imgCarrusel}/>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}