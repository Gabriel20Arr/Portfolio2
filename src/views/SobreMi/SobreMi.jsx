import React from 'react';
import styles from "./SobreMi.module.css";

export const SobreMi = () => {
  const imagenes = [
    "/logos-tech-webp/html.webp",
    "/logos-tech-webp/css.webp",
    "/logos-tech-webp/tailwind.png",
    "/logos-tech-webp/javascript_icon_130900.webp",
    "/logos-tech-webp/react_original_logo_icon_146374.webp",
    "/logos-tech-webp/Java.png",
    "/logos-tech-webp/SpringBoot.png",
    "/logos-tech-webp/express_original_wordmark_logo_icon_146528.webp",
    "/logos-tech-webp/node.png",
    "/logos-tech-webp/MySQL.png",
    "/logos-tech-webp/postgresql_original_logo_icon_146391.webp",
    "/logos-tech-webp/oracle.png",
    "/logos-tech-webp/mongodb_original_logo_icon_146424.webp",
  ];

  const renderImages = (imageArray) => {
    return imageArray.map((image, index) => (
      <div key={index} className={styles.slide2}>
        <img 
          src={image} 
          alt={`Slide ${index}`} 
          className={styles.imgCarrusel} 
        />
      </div>
    ));
  };

  return (
    <div id="sobre-mi" className={styles.containerS}>
      <h1 className={styles.title}>Sobre Mi</h1>
      <p>
        Como desarrollador <b>Full Stack</b> argentino, me especializo en el diseño e implementación de arquitecturas de software escalables y eficientes. Utilizo tecnologías de vanguardia tanto en el frontend como en el backend para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.
        <br />
        <br />
        En el <b>frontend</b>, desarrollo interfaces atractivas y receptivas utilizando bibliotecas modernas como React.js y Next.js, junto con prácticas avanzadas de CSS para estilos limpios y mantenibles.
        <br />
        <br />
        En el <b>backend</b>, trabajo con tecnologías como Node.js, Express.js y Redux para crear APIs robustas y eficientes. Tengo experiencia en bases de datos relacionales como PostgreSQL y no relacionales como MongoDB, así como en la optimización de consultas y gestión de la persistencia de datos.
        <br/>
        <br/>
        Además, poseo habilidades sólidas en el <b>despliegue</b> y gestión de aplicaciones en entornos de producción.
        <br/>
        <br/>
        Mi estilo de trabajo se caracteriza por ser <b>empático, responsable</b> y <b> disciplinado</b>. Disfruto colaborando en equipo y he demostrado habilidades de comunicación efectiva y liderazgo en entornos grupales, contribuyendo al éxito de los proyectos en los que participo.
      </p>

      <div className={styles.carouselSlide1}>
        <div className={styles.carouselSlide2}>
          {renderImages(imagenes)}
          {renderImages(imagenes)}
          {renderImages(imagenes)}
        </div>
      </div>
    </div>
  );
};
