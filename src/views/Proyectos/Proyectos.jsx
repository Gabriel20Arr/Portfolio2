import React, { useState } from 'react'

import styles from "./Proyectos.module.css"

import imgprev from "/icono-next.png" 
import imgNext from "/icono-next.png" 

export const Proyectos = () => {
    const [ selectP, setSelectP ] = useState(1)
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlerSelectProyect = (proyectos) => {
        setSelectP(proyectos)
    }

    const images =  [
        "/imgProyectos/Screenshot 2023-07-15 180709.png", 
        "/imgProyectos/Screenshot 2023-07-15 180735.png"
    ]

    const nextSlide1 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };1

    const prevSlide1 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const images2 = [
        "/imgProyectos/Screenshot 2024-03-19 092902.png",
        "/imgProyectos/Screenshot 2024-03-19 094242.png"
    ]

    const nextSlide2 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images2.length - 1 ? 0 : prevSlide + 1));
    };1

    const prevSlide2 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images2.length - 1 : prevSlide - 1));
    };

    const images3 = [
        "/imgProyectos/Foods.png",
        "/imgProyectos/menuFoods.png"
    ]

    const nextSlide3 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images2.length - 1 ? 0 : prevSlide + 1));
    };1

    const prevSlide3 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images2.length - 1 : prevSlide - 1));
    };


  return (
    <div id='proyectos' className={styles.container}>
        <h1>Proyectos</h1>
        <div className={styles.container2}>
            <div className={styles.containerBtn}>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(1)}>
                    <img src={"/imgProyectos/Screenshot 2023-07-15 180709.png" } alt='' className={styles.imgB}/>
                </button>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(2)}>
                    <img src={"/imgProyectos/Screenshot 2024-03-19 092902.png"} alt='' className={styles.imgB}/>
                </button>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(3)}>
                    <img src={"/imgProyectos/Foods.png"} alt='' className={styles.imgB}/>
                </button>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(4)}>
                    <img src={"/imgProyectos/Screenshot 2024-03-19 094242.png"} alt='' className={styles.imgB}/>
                </button>
            </div>

            <div className={styles.containerCart}>
                { selectP === 1 && ( 
                    <div className={styles.cart}>
                        <div className={styles.carouselSlide}>
                            <button className={styles.prev} onClick={prevSlide1}>
                                <img src={imgprev} alt='' className={styles.ImgBtn}/>
                            </button>
                                {images.map((image, index) => (
                                <div key={index} className={index === currentSlide  ? styles.slideActive : styles.slide}>
                                    <img src={image} alt={`Slide ${index}`} className={styles.imgP}/>
                                </div>
                                ))}
                            <button className={styles.next} onClick={nextSlide1}>
                                <img src={imgNext} alt='' className={styles.ImgBtn}/>
                            </button>
                        </div>

                        <div className={styles.CExp1}>
                            un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
                            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
                        </div>

                    </div> )
                }

                { selectP === 2 && ( 
                    <div className={styles.cart}>
                        <div className={styles.carouselSlide}>
                            <button className={styles.prev} onClick={prevSlide2}>
                                <img src={imgprev} alt='' className={styles.ImgBtn}/>
                            </button>
                                {images2.map((image, index) => (
                                <div key={index} className={index === currentSlide  ? styles.slideActive : styles.slide}>
                                    <img src={image} alt={`Slide ${index}`} className={styles.imgP}/>
                                </div>
                                ))}
                            <button className={styles.next} onClick={nextSlide2}>
                                <img src={imgNext} alt='' className={styles.ImgBtn}/>
                            </button>
                        </div>
                        <div className={styles.CExp1}>
                            un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
                            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
                        </div>
                </div> )
                }
                { selectP === 3 && ( 
                    <div className={styles.cart}>
                        <div className={styles.carouselSlide}>
                            <button className={styles.prev} onClick={prevSlide3}>
                                <img src={imgprev} alt='' className={styles.ImgBtn}/>
                            </button>
                                {images3.map((image, index) => (
                                <div key={index} className={index === currentSlide  ? styles.slideActive : styles.slide}>
                                    <img src={image} alt={`Slide ${index}`} className={styles.imgP}/>
                                </div>
                                ))}
                            <button className={styles.next} onClick={nextSlide3}>
                                <img src={imgNext} alt='' className={styles.ImgBtn}/>
                            </button>
                        </div>

                        <div className={styles.CExp1}>
                            un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
                            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
                        </div>
                </div> )
                }
                { selectP === 4 && ( 
                    <div className={styles.cart}>
                        <img src={"/imgProyectos/Screenshot 2024-03-19 094242.png"} alt='' className={styles.imgP}/>
                        <div className={styles.CExp1}>
                            un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
                            Mi enfoque se centra en crear soluciones sólidas y escalables utilizando tecnologías modernas y prácticas ágiles.
                        </div>
                </div> )
                }

            </div>
        </div>
    </div>
  )
}