import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./Proyectos.module.css";

import imgNext from "/flecha-correcta.png";
import imgprev from "/flecha-izquierda.png";
import internet from "/img-proyectos-webp/internet-Proyect.png";
import github from "/contact/github-contact.png";

// Datos de los proyectos y sus imágenes
const projectData = [
  {
    id: 1,
    title: "Market Place",
    description: "MarketX es un Marketplace que te permite explorar y realizar compras de manera fácil y segura. Puedes acceder al sitio iniciando sesión con tu cuenta de Google o creando tu propia cuenta personalizada. Una vez dentro, podrás publicar tus propios productos y mostrarlos a la comunidad.",
    images: ["/img-proyectos-webp/market.webp", "/img-proyectos-webp/marketX2.webp"],
    webLink: "https://marketx-doploy.vercel.app/",
    githubLink: "https://github.com/Gabriel20Arr/marketX"
  },
  {
    id: 2,
    title: "ToDoList",
    description: "Esta no es tu típica lista de tareas; es una experiencia personalizada con un sistema de inicio de sesión que te permite llevar un registro de tus tareas de manera eficiente. 💻🔐 La navegación intuitiva te guía a través de secciones como tu perfil, página principal, la opción de agregar nuevas tareas, marcar como favoritas y una útil sección de ayuda. ¡Y sí, puedes contactarme directamente por correo electrónico para cualquier pregunta o problema! 🚀📧 Cada tarea que creas viene con detalles clave: categoría, título, descripción, fecha de creación, un temporizador y un calendario con alertas para mantenerte organizado. ⏰🗓️",
    images: ["/img-proyectos-webp/to-do-2.webp", "/img-proyectos-webp/to-do.webp" ],
    webLink: "https://todolist-s3jc.onrender.com/",
    githubLink: "https://github.com/Gabriel20Arr/ToDoList"
  },
  {
    id: 3,
    title: "Organizer",
    description: "Organizer es una herramienta diseñada para que reclutadores gestionen fácilmente candidatos de diversas profesiones. Cuenta con secciones de perfil, favoritos, ayuda y un home para navegación rápida. Incluye un buscador y paginación para explorar perfiles eficientemente. Con opciones de login y registro, Organizer se convierte en una solución práctica y ordenada para optimizar el proceso de reclutamiento.",
    images: ["/img-proyectos-webp/project-recluiting/tablaC.jpeg", "/img-proyectos-webp/project-recluiting/tablaF.jpeg", "/img-proyectos-webp/project-recluiting/login.jpeg", "/img-proyectos-webp/project-recluiting/register.jpeg"],
    githubLink: "https://github.com/Gabriel20Arr/Organizer-R"
  },
  {
    id: 4,
    title: "Download Youtube",
    description: "Aplicación para descargar videos y audios de YouTube usando tecnologías como web scraping y Node.js para el backend, junto con React.js en el frontend. La aplicación permite a los usuarios pegar enlaces de YouTube y obtener opciones para descargar videos en diferentes formatos y calidades.",
    images: ["/img-proyectos-webp/downloadY-1.jpeg", "/img-proyectos-webp/downloadY-2.jpeg", "/img-proyectos-webp/downloadY-3.jpeg"],
    githubLink: "https://github.com/Gabriel20Arr/Dowload-YT.git"
  },
  {
    id: 5,
    title: "Foods",
    description: "Trata de una web donde los usuarios podrán crear sus propias recetas, realizar búsquedas, ver detalles de las recetas, navegar con un sistema de paginación y aplicar filtros de diversos tipos. También se les permitió crear nuevas recetas y compartir sus propias creaciones culinarias. ",
    images: ["/img-proyectos-webp/Foods.webp", "/img-proyectos-webp/menuFoods.webp"],
    webLink: "https://deploy-food-sage.vercel.app/",
    githubLink: "https://github.com/Gabriel20Arr/Deploy-Food"
  },
];

export const Proyectos = () => {
  const [selectP, setSelectP] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openImg, setOpenImg] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const handlerSelectProyect = (proyectos) => {
    setSelectP(proyectos);
    setCurrentSlide(0); // Reinicia el slider al cambiar de proyecto
  };

  // Controladores de deslizamiento
  const nextSlide = (images) => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = (images) => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Renderiza el contenido de un proyecto seleccionado
  const renderProject = (project) => {
    return (
      <div className={styles.cart}>
        <div className={styles.carouselSlide}>
          <button className={styles.prev} onClick={() => prevSlide(project.images)}>
            <img src={imgprev} alt='' className={styles.ImgBtn}/>
          </button>
          {project.images.map((image, index) => (
            <div key={index} className={index === currentSlide ? styles.slideActive : styles.slide}>

              <img 
                src={image} 
                alt={`Slide ${index}`} 
                className={styles.imgP} 
                onClick={() => {
                  setSelectedImage(image); 
                  setOpenImg(true); 
                }}
              />
            </div>
          ))}
          <button className={styles.next} onClick={() => nextSlide(project.images)}>
            <img src={imgNext} alt='' className={styles.ImgBtn}/>
          </button>
        </div>
        
        {openImg && selectedImage && (
          <div className={styles.modal} onClick={() => setOpenImg(false)}>
            <div className={styles.modalContent}>
              <img 
                src={selectedImage}  
                alt="Ampliada"                 
              />
            </div>
          </div>
        )}
        
        <div className={styles.contenedorTitleImg}>
          <h3 className={styles.titleProyectos}>{project.title}</h3>
          <div className={styles.contenedorImgProyectos}>
            { 
                project.webLink && <Link to={project.webLink} target='_blank' rel="noopener noreferrer">
                <div className={styles.containerIndvImgProyect}>
                    <img src={internet} alt='Internet' className={styles.imgProyectos}/>
                    <span className={styles.nameImg}>Web</span>
                </div>
                </Link>
            }

            <Link to={project.githubLink} target='_blanck' rel="noopener noreferrer">
              <div className={styles.containerIndvImgProyect}>
                <img src={github} alt='Github' className={styles.imgProyectos}/>
                <span className={styles.nameImg2}>Github</span>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.CExp1}>{project.description}</div>
      </div>
    );
  };

  return (
    <div id='proyectos' className={styles.container}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.container2}>
        <div className={styles.containerBtn}>
          {projectData.map((project) => (
            <button key={project.id} className={styles.Btn} onClick={() => handlerSelectProyect(project.id)}>
              <img src={project.images[0]} alt='' className={styles.imgB}/>
            </button>
          ))}
        </div>

        <div className={styles.containerCart}>
          {renderProject(projectData.find((project) => project.id === selectP))}
        </div>
      </div>
    </div>
  );
};
