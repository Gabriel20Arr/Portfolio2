import React, { useState } from 'react'

import styles from "./SobreMi.module.css"


export const SobreMi = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const imagenes = [
        "/imgProyectos/Foods.png",
        "/imgProyectos/menuFoods.png",
        "/imgProyectos/Screenshot 2024-03-19 092902.png",
        "/imgProyectos/Screenshot 2024-03-19 094242.png",
        "/imgProyectos/Screenshot 2023-07-15 180709.png", 
        "/imgProyectos/Screenshot 2023-07-15 180735.png"
    ]

    const imagenes2 = [
        "/imgProyectos/Foods.png",
        "/imgProyectos/menuFoods.png",
        "/imgProyectos/Screenshot 2024-03-19 092902.png",
        "/imgProyectos/Screenshot 2024-03-19 094242.png",
        "/imgProyectos/Screenshot 2023-07-15 180709.png", 
        "/imgProyectos/Screenshot 2023-07-15 180735.png"
    ]
    const imagenes3 = [
        "/imgProyectos/Foods.png",
        "/imgProyectos/menuFoods.png",
        "/imgProyectos/Screenshot 2024-03-19 092902.png",
        "/imgProyectos/Screenshot 2024-03-19 094242.png",
        "/imgProyectos/Screenshot 2023-07-15 180709.png", 
        "/imgProyectos/Screenshot 2023-07-15 180735.png"
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

        <p className={styles.c2P}>
            Soy un desarrollador <b> Full Stack </b> argentino con amplia experiencia en todas las áreas del desarrollo web. 
            <br />
            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles. 
            <br/>
            Soy una persona empática, responsable y disciplinada, y disfruto trabajando en equipo. He demostrado habilidades de comunicación y liderazgo al colaborar efectivamente en entornos grupales. Además, siempre estoy en busca de oportunidades para ampliar mis conocimientos a través de certificaciones y cursos relevantes en desarrollo web.
        </p> 
    </div>
  )
}