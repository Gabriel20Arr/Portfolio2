import React, { useState } from 'react'
import { Link } from "react-router-dom" 

import styles from "./Proyectos.module.css"

import imgprev from "/img-proyectos-webp/icono-next.png" 
import imgNext from "/img-proyectos-webp/icono-next.png" 
import internet from "/img-proyectos-webp/internet-Proyect.png"
import github from "/contact/github-contact.png"

export const Proyectos = () => {
    const [ selectP, setSelectP ] = useState(1)
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlerSelectProyect = (proyectos) => {
        setSelectP(proyectos)
    }

    const images =  [
        "/img-proyectos-webp/market.webp", 
        "/img-proyectos-webp/marketX2.webp"
    ]

    const nextSlide1 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };1

    const prevSlide1 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const images2 = [
        "/img-proyectos-webp/to-do.webp",
        "/img-proyectos-webp/to-do-2.webp"
    ]

    const nextSlide2 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images2.length - 1 ? 0 : prevSlide + 1));
    };1

    const prevSlide2 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images2.length - 1 : prevSlide - 1));
    };

    const images3 = [
        "/img-proyectos-webp/Foods.webp",
        "/img-proyectos-webp/menuFoods.webp"
    ] 

    const nextSlide3 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images2.length - 1 ? 0 : prevSlide + 1));
    };1

    const prevSlide3 = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images2.length - 1 : prevSlide - 1));
    };


  return (
    <div id='proyectos' className={styles.container}>
        <h1 className={styles.title}>Proyectos</h1>
        <div className={styles.container2}>
            <div className={styles.containerBtn}>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(1)}>
                    <img src={"/img-proyectos-webp/market.webp"} alt='' className={styles.imgB}/>
                </button>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(2)}>
                    <img src={"/img-proyectos-webp/to-do.webp"} alt='' className={styles.imgB}/>
                </button>
                <button className={styles.Btn} onClick={() => handlerSelectProyect(3)}>
                    <img src={"/img-proyectos-webp/Foods.webp"} alt='' className={styles.imgB}/>
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

                        <div className={styles.contenedorImgProyectos}>
                            <Link to={"https://marketx-doploy.vercel.app/"}>
                                <div className={styles.containerIndvImgProyect}>
                                    <img src={internet} alt='Internet' className={styles.imgProyectos}/>
                                    <span className={styles.nameImg}>Web</span>
                                </div>
                            </Link>

                            <Link to={"https://github.com/Gabriel20Arr/marketX"}>
                                <div className={styles.containerIndvImgProyect}>
                                    <img src={github} alt='Github' className={styles.imgProyectos}/>
                                    <span className={styles.nameImg2}>Github</span>
                                </div>
                            </Link>
                        </div>

                        <h3 className={styles.titleProyectos}>Market Place</h3>
                        <div className={styles.CExp1}>
                            Un desarrollador Full Stack argentino con amplia experiencia en todas las áreas del desarrollo web.
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

                        <div className={styles.contenedorImgProyectos}>
                            <Link to={"https://todolist-s3jc.onrender.com/"}>
                                <div className={styles.containerIndvImgProyect}>
                                    <img src={internet} alt='Internet' className={styles.imgProyectos}/>
                                    <span className={styles.nameImg}>Web</span>
                                </div>
                            </Link>

                            <Link to={"https://github.com/Gabriel20Arr/ToDoList"}>
                                <div className={styles.containerIndvImgProyect}>
                                    <img src={github} alt='Github' className={styles.imgProyectos}/>
                                    <span className={styles.nameImg2}>Github</span>
                                </div>
                            </Link>
                        </div>

                        <h3 className={styles.titleProyectos}>To Do List</h3>
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


                        <div className={styles.contenedorImgProyectos}>
                            <Link to={"https://deploy-food-sage.vercel.app/"}>
                                <div className={styles.containerIndvImgProyect}>
                                    <img src={internet} alt='Internet' className={styles.imgProyectos}/>
                                    <span className={styles.nameImg}>Web</span>
                                </div>
                            </Link>

                            <Link to={"https://github.com/Gabriel20Arr/Deploy-Food"}>
                                <div className={styles.containerIndvImgProyect}>
                                    <img src={github} alt='Github' className={styles.imgProyectos}/>
                                    <span className={styles.nameImg2}>Github</span>
                                </div>
                            </Link>
                        </div>

                        <h3 className={styles.titleProyectos}>
                            Foods
                        </h3>
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